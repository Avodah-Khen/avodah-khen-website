import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminRequest } from "@/lib/admin-auth";

// Public: only reports whether the database is reachable, so uptime monitors can use it.
// Admin (ADMIN_API_KEY): also returns record counts and the underlying error message.
export async function GET(req: NextRequest) {
  const isAdmin = isAdminRequest(req);
  const startTime = Date.now();
  try {
    // Ping direct Neon connection via raw query
    await prisma.$queryRaw`SELECT 1`;
    const latencyMs = Date.now() - startTime;

    if (!isAdmin) {
      return NextResponse.json({ status: "healthy", timestamp: new Date().toISOString() });
    }

    const [contactsCount, careersCount, waitlistsCount, subscribersCount] = await Promise.all([
      prisma.contacts.count().catch(() => 0),
      prisma.career_applications.count().catch(() => 0),
      prisma.waitlists.count().catch(() => 0),
      prisma.newsletter_subscribers.count().catch(() => 0),
    ]);

    return NextResponse.json({
      status: "healthy",
      database: "Neon PostgreSQL",
      connection: "connected",
      latencyMs,
      metrics: {
        contacts: contactsCount,
        careerApplications: careersCount,
        waitlistReservations: waitlistsCount,
        newsletterSubscribers: subscribersCount,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const latencyMs = Date.now() - startTime;
    console.error("[HEALTH_CHECK_ERROR]", error);

    if (!isAdmin) {
      return NextResponse.json(
        { status: "unhealthy", timestamp: new Date().toISOString() },
        { status: 503 }
      );
    }

    const message = error instanceof Error ? error.message : "Database connection failed";
    return NextResponse.json(
      {
        status: "unhealthy",
        database: "Neon PostgreSQL",
        connection: "disconnected",
        latencyMs,
        error: message,
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
