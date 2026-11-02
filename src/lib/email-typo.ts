const COMMON_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "proton.me",
  "protonmail.com",
];

const KNOWN_TYPOS: Record<string, string> = {
  "gmail.con": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmial.com": "gmail.com",
  "yahoo.con": "yahoo.com",
  "yaho.com": "yahoo.com",
  "hotmail.con": "hotmail.com",
  "outlook.con": "outlook.com",
  "icloud.con": "icloud.com",
};

/**
 * Returns a typo suggestion hint if a common misspelling is detected.
 * Client-safe pure string utility with no Node.js runtime dependencies.
 */
export function getEmailTypoHint(email: string): string | null {
  if (!email || !email.includes("@")) return null;
  const parts = email.trim().toLowerCase().split("@");
  if (parts.length !== 2) return null;
  const domain = parts[1];

  if (KNOWN_TYPOS[domain]) {
    return `Did you mean ${KNOWN_TYPOS[domain]}?`;
  }

  if (domain.endsWith(".con")) {
    const suggested = domain.slice(0, -4) + ".com";
    if (COMMON_DOMAINS.includes(suggested)) {
      return `Did you mean ${suggested}?`;
    }
    return `Did you mean ${domain.slice(0, -4)}.com?`;
  }

  return null;
}

