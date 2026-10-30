import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { newsletterSchema } from "@/lib/validation";
import { parseJsonBody } from "@/lib/api-validation";

export async function POST(req: NextRequest) {
  // 10 submissions per IP every 10 minutes
  const limited = rateLimit(req, "newsletter", 10, 10 * 60_000);
  if (limited) return limited;

  try {
    const parsed = await parseJsonBody(req, newsletterSchema);
    if (parsed.response) return parsed.response;
    const { email, source } = parsed.data;

    const sub = await prisma.newsletter_subscribers.upsert({
      where: { email },
      update: {
        active: true,
        source: source || "footer",
      },
      create: {
        email,
        source: source || "footer",
        active: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: sub.id,
        message: "Subscribed to Avodah market intelligence and advisory dispatches.",
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API_NEWSLETTER_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe to intelligence reports." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req);
  if (denied) return denied;

  try {
    const subscriberCount = await prisma.newsletter_subscribers.count({
      where: { active: true },
    });

    return NextResponse.json({
      success: true,
      subscriberCount,
    });
  } catch (error: unknown) {
    console.error("[API_NEWSLETTER_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch newsletter metrics." },
      { status: 500 }
    );
  }
}
