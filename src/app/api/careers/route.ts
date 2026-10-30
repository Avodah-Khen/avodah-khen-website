import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { careerApplicationSchema } from "@/lib/validation";
import { parseJsonBody, parseSearchParams } from "@/lib/api-validation";

const careersQuerySchema = z.object({
  department: z.string().trim().min(1).optional().catch(undefined),
});

export async function POST(req: NextRequest) {
  // 5 submissions per IP every 10 minutes
  const limited = rateLimit(req, "careers", 5, 10 * 60_000);
  if (limited) return limited;

  try {
    const parsed = await parseJsonBody(req, careerApplicationSchema);
    if (parsed.response) return parsed.response;
    const {
      fullName,
      firstName,
      lastName,
      email,
      phone,
      department,
      roleTitle,
      experience,
      currentCompany,
      noticePeriod,
      linkedinUrl,
      message,
      coverNote,
    } = parsed.data;

    // Resolve first name and last name (schema guarantees one of firstName / fullName)
    let resolvedFirstName = firstName || "";
    let resolvedLastName = lastName || "";

    if (!resolvedFirstName && fullName) {
      const parts = fullName.split(/\s+/);
      resolvedFirstName = parts[0].slice(0, 100);
      resolvedLastName = (parts.slice(1).join(" ") || parts[0]).slice(0, 100);
    }

    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `AVK-${year}-${randomSuffix}`;

    const application = await prisma.career_applications.create({
      data: {
        first_name: resolvedFirstName,
        last_name: resolvedLastName || resolvedFirstName,
        contact_number: phone,
        email_address: email,
        department: department || "General Advisory",
        job_applied_for: roleTitle || "Spontaneous Application",
        message: message || coverNote || "Submitted via Avodah career portal",
        reference_code: referenceCode,
        experience: experience || null,
        current_company: currentCompany || null,
        linkedin_url: linkedinUrl || null,
        notice_period: noticePeriod || null,
        status: "SUBMITTED",
      },
    });

    return NextResponse.json(
      {
        success: true,
        referenceCode: application.reference_code,
        id: application.id,
        message: "Confidential dossier received. An advisory partner will review your credentials.",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API_CAREERS_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit career dossier." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  try {
    const { department } = parseSearchParams(req, careersQuerySchema);

    const applications = await prisma.career_applications.findMany({
      where: department ? { department: { contains: department, mode: "insensitive" } } : undefined,
      orderBy: { created_at: "desc" },
      take: 50,
    });

    const totalApplications = await prisma.career_applications.count();

    return NextResponse.json({
      success: true,
      totalApplications,
      applications,
    });
  } catch (error: unknown) {
    console.error("[API_CAREERS_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve career applications." },
      { status: 500 }
    );
  }
}
