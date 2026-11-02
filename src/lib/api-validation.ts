import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { firstIssue, HONEYPOT_FIELD } from "@/lib/validation";
import { verifyEmailDomain } from "@/lib/email-check";

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return true; // Direct non-browser requests / same-origin without header
  try {
    const originUrl = new URL(origin);
    const host = originUrl.hostname.toLowerCase();

    // Local dev origins
    if (host === "localhost" || host === "127.0.0.1" || host === "192.168.137.1") {
      return true;
    }

    // Configured site URL
    const siteEnv = process.env.NEXT_PUBLIC_SITE_URL;
    if (siteEnv) {
      try {
        const siteUrl = new URL(siteEnv);
        if (originUrl.origin === siteUrl.origin) return true;
      } catch {}
    }

    if (host === "avodahgroup.co" || host.endsWith(".avodahgroup.co")) {
      return true;
    }

    if (host.endsWith(".vercel.app")) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

function isHoneypotTripped(body: unknown): boolean {
  if (typeof body !== "object" || body === null) return false;
  const value = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim() !== "";
}

type ParseResult<T> =
  | { data: T; response?: never }
  | { data?: never; response: NextResponse };

/** Reads the JSON body, verifies Content-Type and Origin, and validates schema & MX domain. */
export async function parseJsonBody<S extends z.ZodType>(
  req: NextRequest,
  schema: S
): Promise<ParseResult<z.output<S>>> {
  // 1. Content-Type check (reject non-JSON with 415)
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return {
      response: NextResponse.json(
        { success: false, error: "Content-Type must be application/json." },
        { status: 415 }
      ),
    };
  }

  // 2. Origin check (reject cross-site post from foreign origins with 403)
  const origin = req.headers.get("origin");
  if (origin && !isOriginAllowed(origin)) {
    return {
      response: NextResponse.json(
        { success: false, error: "Cross-site request forbidden." },
        { status: 403 }
      ),
    };
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return {
      response: NextResponse.json(
        { success: false, error: "Request body must be valid JSON." },
        { status: 400 }
      ),
    };
  }

  // Honeypot check
  if (isHoneypotTripped(body)) {
    console.warn("[API_HONEYPOT] Dropped submission with filled honeypot field");
    return { response: NextResponse.json({ success: true }, { status: 201 }) };
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return {
      response: NextResponse.json(
        { success: false, error: firstIssue(result.error), issues: z.flattenError(result.error).fieldErrors },
        { status: 400 }
      ),
    };
  }

  // 3. Server-side MX/DNS lookup on email field
  const data = result.data as Record<string, unknown>;
  const emailCandidate = data?.email || data?.work_email || data?.email_address;
  if (typeof emailCandidate === "string" && emailCandidate.includes("@")) {
    const mxResult = await verifyEmailDomain(emailCandidate);
    if (!mxResult.valid) {
      return {
        response: NextResponse.json(
          {
            success: false,
            error: mxResult.error || "The email domain cannot receive mail.",
            hint: mxResult.hint || undefined,
          },
          { status: 400 }
        ),
      };
    }
  }

  return { data: result.data };
}

/** Validates URL search params against a schema, falling back to schema defaults/catches. */
export function parseSearchParams<S extends z.ZodType>(req: NextRequest, schema: S): z.output<S> {
  const params = Object.fromEntries(new URL(req.url).searchParams);
  return schema.parse(params);
}
