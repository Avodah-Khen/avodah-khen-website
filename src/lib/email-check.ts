import dns from "node:dns";
import { getEmailTypoHint } from "@/lib/email-typo";

export { getEmailTypoHint };

/**
 * Server-side MX/DNS lookup to confirm whether the domain can receive mail.
 * This runs solely in server-side API handlers (Node.js runtime).
 */
export async function verifyEmailDomain(email: string): Promise<{ valid: boolean; error?: string; hint?: string | null }> {
  if (!email || !email.includes("@")) {
    return { valid: false, error: "Invalid email address format." };
  }

  const parts = email.trim().toLowerCase().split("@");
  if (parts.length !== 2) {
    return { valid: false, error: "Invalid email address format." };
  }

  const domain = parts[1];
  const hint = getEmailTypoHint(email);

  try {
    const mxRecords = await dns.promises.resolveMx(domain);
    if (mxRecords && mxRecords.length > 0) {
      return { valid: true, hint };
    }
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code;
    // If no MX records, check for A records (RFC 5321 fallback)
    if (code === "ENODATA" || code === "ENOTFOUND" || code === "ESERVFAIL") {
      try {
        const aRecords = await dns.promises.resolve4(domain);
        if (aRecords && aRecords.length > 0) {
          return { valid: true, hint };
        }
      } catch {
        // Fallback failed
      }
    }
    return {
      valid: false,
      error: `The email domain "${domain}" cannot receive mail or does not exist.${hint ? ` ${hint}` : ""}`,
      hint,
    };
  }

  return {
    valid: false,
    error: `The email domain "${domain}" has no mail exchange (MX) servers configured.`,
    hint,
  };
}
