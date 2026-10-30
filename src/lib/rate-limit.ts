import { NextRequest, NextResponse } from "next/server";

// Fixed-window rate limiter for the public form endpoints, keyed by client IP.
// State lives in this server instance's memory: it fully works on a single server
// (and in dev); on serverless hosting each warm instance keeps its own count, which
// still stops a single client flooding the API but is not a global limit. For a strict
// global limit, back this with a shared store (Redis / Upstash or a database table).

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_TRACKED_KEYS = 10_000;

function clientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function sweepExpired(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Counts this request against `name` for the caller's IP. Returns a 429 response once
 * more than `limit` requests arrive within `windowMs`, otherwise null.
 */
export function rateLimit(
  req: NextRequest,
  name: string,
  limit: number,
  windowMs: number
): NextResponse | null {
  const now = Date.now();
  if (buckets.size > MAX_TRACKED_KEYS) sweepExpired(now);

  const key = `${name}:${clientIp(req)}`;
  let bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + windowMs };
    buckets.set(key, bucket);
  }
  bucket.count += 1;

  if (bucket.count <= limit) return null;

  const retryAfterSeconds = Math.ceil((bucket.resetAt - now) / 1000);
  return NextResponse.json(
    {
      success: false,
      error: "Too many submissions. Please wait a few minutes and try again.",
    },
    { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
  );
}
