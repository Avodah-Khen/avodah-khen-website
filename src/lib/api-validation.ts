import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { firstIssue, HONEYPOT_FIELD } from "@/lib/validation";

function isHoneypotTripped(body: unknown): boolean {
  if (typeof body !== "object" || body === null) return false;
  const value = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim() !== "";
}

type ParseResult<T> =
  | { data: T; response?: never }
  | { data?: never; response: NextResponse };

/** Reads the JSON body and validates it; on failure returns a ready 400 response. */
export async function parseJsonBody<S extends z.ZodType>(
  req: NextRequest,
  schema: S
): Promise<ParseResult<z.output<S>>> {
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

  // Honeypot filled in: almost certainly a bot. Pretend it worked so it moves on,
  // but never save anything.
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
  return { data: result.data };
}

/** Validates URL search params against a schema, falling back to schema defaults/catches. */
export function parseSearchParams<S extends z.ZodType>(req: NextRequest, schema: S): z.output<S> {
  const params = Object.fromEntries(new URL(req.url).searchParams);
  return schema.parse(params);
}
