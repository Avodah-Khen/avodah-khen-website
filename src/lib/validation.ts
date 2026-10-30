import { z } from "zod";

// Shared zod schemas for every form on the site. Imported by the client forms
// (to validate before submitting) and by the API routes (to validate requests),
// so both sides always agree. Max lengths mirror the column sizes in prisma/schema.prisma.

const requiredText = (label: string, max: number) =>
  z
    .string({ error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} must be ${max} characters or fewer.`);

const optionalText = (label: string, max: number) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be ${max} characters or fewer.`)
    .optional();

export const emailField = z
  .string({ error: "Email address is required." })
  .trim()
  .toLowerCase()
  .pipe(
    z
      .email("Please enter a valid email address.")
      .max(255, "Email address must be 255 characters or fewer.")
  );

export const phoneField = z
  .string({ error: "Phone number is required." })
  .trim()
  .min(1, "Phone number is required.")
  .regex(/^\+?[\d\s()-]{7,20}$/, "Please enter a valid phone number.");

export const contactRequestSchema = z.object({
  fullName: requiredText("Full name", 150),
  email: emailField,
  phone: phoneField,
  service: requiredText("Service", 150),
  organization: optionalText("Organization", 150),
  city: optionalText("City", 150),
  microMarket: optionalText("Micro-market", 150),
  message: optionalText("Message", 5000),
  source: optionalText("Source", 50),
});
export type ContactRequest = z.infer<typeof contactRequestSchema>;

export const careerApplicationSchema = z
  .object({
    fullName: optionalText("Full name", 200),
    firstName: optionalText("First name", 100),
    lastName: optionalText("Last name", 100),
    email: emailField,
    phone: phoneField,
    department: optionalText("Department", 50),
    roleTitle: optionalText("Role", 150),
    experience: optionalText("Experience", 50),
    currentCompany: optionalText("Current company", 150),
    noticePeriod: optionalText("Notice period", 50),
    linkedinUrl: z
      .union([z.literal(""), z.url("Please enter a valid LinkedIn URL.").max(255)])
      .optional(),
    message: optionalText("Message", 5000),
    coverNote: optionalText("Cover note", 5000),
  })
  .refine((d) => d.firstName || d.fullName, {
    message: "Applicant name is required.",
    path: ["fullName"],
  });
export type CareerApplication = z.infer<typeof careerApplicationSchema>;

export const newsletterSchema = z.object({
  email: emailField,
  source: optionalText("Source", 50),
});

export const waitlistSchema = z.object({
  email: emailField,
  // Unknown platform types fall back to proptech, as before.
  type: z.enum(["proptech", "fintech", "voicebot"]).catch("proptech"),
  interest: optionalText("Interest", 100),
});

/**
 * Name of the hidden anti-spam field every form sends. People never see it, so it is
 * always empty for them; bots that fill in every input give themselves away.
 */
export const HONEYPOT_FIELD = "website";

/** Reads the honeypot value from a submitted form element. */
export function readHoneypot(form: HTMLFormElement): string {
  const input = form.elements.namedItem(HONEYPOT_FIELD);
  return input instanceof HTMLInputElement ? input.value : "";
}

/** First human-readable message from a failed parse, for showing in a form. */
export function firstIssue(error: z.ZodError): string {
  return error.issues[0]?.message ?? "Please check the form and try again.";
}
