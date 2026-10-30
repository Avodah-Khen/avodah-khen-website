import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { contactRequestSchema } from "@/lib/validation";
import { parseJsonBody, parseSearchParams } from "@/lib/api-validation";

const contactsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).catch(50).transform((n) => Math.min(n, 100)),
  service: z.string().trim().min(1).optional().catch(undefined),
});

export async function POST(req: NextRequest) {
  // 5 submissions per IP every 10 minutes
  const limited = rateLimit(req, "contact", 5, 10 * 60_000);
  if (limited) return limited;

  try {
    const parsed = await parseJsonBody(req, contactRequestSchema);
    if (parsed.response) return parsed.response;
    const { fullName, email, phone, organization, service, city, microMarket, message, source } =
      parsed.data;

    // Generate unique reference code
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `AK-${year}-${randomSuffix}`;

    // Save to Neon DB contacts table
    const contact = await prisma.contacts.create({
      data: {
        name: fullName,
        work_email: email,
        city: city || microMarket || "Mumbai",
        phone,
        service,
        organization: organization || null,
        message: message || null,
        reference_code: referenceCode,
        source: source || "homepage",
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        referenceCode: contact.reference_code,
        id: contact.id,
        message: "Your advisory consultation request has been recorded in our institutional registry.",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API_CONTACT_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to record inquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  try {
    const { limit, service } = parseSearchParams(req, contactsQuerySchema);

    const contactsList = await prisma.contacts.findMany({
      where: service ? { service: { contains: service, mode: "insensitive" } } : undefined,
      take: limit,
      orderBy: { created_at: "desc" },
    });

    const totalCount = await prisma.contacts.count();

    return NextResponse.json({
      success: true,
      totalCount,
      contacts: contactsList,
    });
  } catch (error: unknown) {
    console.error("[API_CONTACT_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries." },
      { status: 500 }
    );
  }
}
