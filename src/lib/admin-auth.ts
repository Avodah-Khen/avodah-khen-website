import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

// Guards the read (GET) endpoints that expose submitted data. The public forms only
// POST, so they never need this. A request counts as admin when it carries either:
//   - the ADMIN_API_KEY as `Authorization: Bearer <key>` or `x-admin-key: <key>`
//     (for scripts / curl), or
//   - a signed admin session cookie, set by signing in at /admin (for the browser).
// If ADMIN_API_KEY is not set, every request is refused, so a missing env var never
// leaves the data open. Unauthorised requests get a plain 404, so the endpoints look
// like they don't exist.

export const ADMIN_SESSION_COOKIE = "avodah_admin";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 8 * 60 * 60; // 8 hours

const digest = (value: string) => createHash("sha256").update(value).digest();

/** Constant-time string comparison (hashing first makes the lengths equal). */
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));

export function isValidAdminKey(provided: string | null | undefined): boolean {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected || !provided) return false;
  return safeEqual(provided.trim(), expected);
}

// The cookie holds "<expiry>.<signature>", never the key itself. The signature is
// keyed by ADMIN_API_KEY, so rotating the key signs every browser out.
function sign(expiresAt: number, key: string) {
  return createHmac("sha256", key).update(`admin-session:${expiresAt}`).digest("hex");
}

export function createAdminSessionToken(): string {
  const key = process.env.ADMIN_API_KEY;
  if (!key) throw new Error("ADMIN_API_KEY is not set");
  const expiresAt = Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
  return `${expiresAt}.${sign(expiresAt, key)}`;
}

function isValidSessionToken(token: string | undefined): boolean {
  const key = process.env.ADMIN_API_KEY;
  if (!key || !token) return false;
  const [expiresRaw, signature] = token.split(".");
  const expiresAt = Number(expiresRaw);
  if (!signature || !Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  return safeEqual(signature, sign(expiresAt, key));
}

export function isAdminRequest(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  const headerKey = auth?.startsWith("Bearer ")
    ? auth.slice("Bearer ".length)
    : req.headers.get("x-admin-key");
  if (isValidAdminKey(headerKey)) return true;

  return isValidSessionToken(req.cookies.get(ADMIN_SESSION_COOKIE)?.value);
}

/** Returns a 404 response when the request is not authorised, otherwise null. */
export function requireAdmin(req: NextRequest): NextResponse | null {
  if (isAdminRequest(req)) return null;
  return NextResponse.json({ success: false, error: "Not found." }, { status: 404 });
}
