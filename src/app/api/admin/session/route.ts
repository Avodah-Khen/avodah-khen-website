import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE_SECONDS,
  createAdminSessionToken,
  isAdminRequest,
  isValidAdminKey,
} from "@/lib/admin-auth";
import { rateLimit } from "@/lib/rate-limit";
import { parseJsonBody } from "@/lib/api-validation";

const signInSchema = z.object({
  key: z.string({ error: "Admin key is required." }).trim().min(1, "Admin key is required."),
});

// Is this browser signed in? Used by the /admin page.
export async function GET(req: NextRequest) {
  return NextResponse.json({ authenticated: isAdminRequest(req) });
}

// Sign in: exchange the admin key for an httpOnly session cookie.
export async function POST(req: NextRequest) {
  // 5 attempts per IP every 10 minutes
  const limited = rateLimit(req, "admin-session", 5, 10 * 60_000);
  if (limited) return limited;

  const parsed = await parseJsonBody(req, signInSchema);
  if (parsed.response) return parsed.response;

  if (!isValidAdminKey(parsed.data.key)) {
    return NextResponse.json({ success: false, error: "Invalid admin key." }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });
  return res;
}

// Sign out.
export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
