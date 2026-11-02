import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThreeArchitecturalBackground from "@/components/ThreeArchitecturalBackground";
import SparkleBackground from "@/components/SparkleBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Privacy Notice & Institutional Data Policy — AVODAH",
  description:
    "Institutional privacy policy and data governance practices of AVODAH in compliance with the Digital Personal Data Protection Act (DPDP Act).",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="relative isolate min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300">
      <CustomCursor />
      <ThreeArchitecturalBackground />
      <SparkleBackground />
      <Navigation />

      <section className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-[var(--theme-accent)] mb-3">
            Governance & Compliance
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--theme-text)] tracking-tight">
            Institutional Privacy Notice
          </h1>
          <p className="text-sm font-mono text-[var(--theme-text-muted)] mt-2">
            Last updated: November 2026 · Compliant with the India Digital Personal Data Protection Act (DPDP Act)
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--theme-text-muted)] border-t border-[var(--theme-border)] pt-8">
          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">1. Scope and Objective</h2>
            <p>
              AVODAH (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a premier real estate advisory and connected PropTech entity. This Institutional Privacy Notice governs the collection, processing, and safeguarding of personal data provided through our digital portals, including inquiries for developer mandates, commercial leasing advisory, early access waitlists, and executive career submissions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">2. Data We Collect</h2>
            <p className="mb-2">We collect only information voluntarily provided by institutional partners, clients, and applicants:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-[var(--theme-text)]">Contact Information:</strong> Full name, professional work email address, telephone/mobile number, and city of residence.</li>
              <li><strong className="text-[var(--theme-text)]">Advisory Consultation Details:</strong> Corporate entity or developer affiliation, project parameters, asset valuation tier, and bespoke mandate inquiries.</li>
              <li><strong className="text-[var(--theme-text)]">Career Dossiers:</strong> Professional biography, LinkedIn profile URL, current company, domain specialization, and notice period.</li>
              <li><strong className="text-[var(--theme-text)]">Technical Telemetry:</strong> Client IP addresses processed ephemerally for rate limiting, DDoS mitigation, and anti-spam protection.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">3. Purpose and Legal Grounds of Processing</h2>
            <p className="mb-2">Your personal data is processed strictly for legitimate institutional purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Fulfilling direct requests for developer mandate consultations, leasing evaluations, and investment reports.</li>
              <li>Evaluating candidate credentials submitted for strategic leadership roles.</li>
              <li>Delivering periodic market research publications and intelligence dispatches (subject to opt-out).</li>
              <li>Safeguarding our technical infrastructure from fraudulent submissions and automated abuse.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">4. Institutional Confidentiality &amp; Non-Disclosure</h2>
            <p>
              AVODAH does not sell, lease, or monetize personal data. All candidate dossiers and proprietary advisory discussions are treated with rigorous executive confidentiality. Data is accessible solely to authorized partners and key personnel bound by strict non-disclosure obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">5. Data Storage &amp; Security Infrastructure</h2>
            <p>
              Our database infrastructure is hosted with Neon PostgreSQL utilizing encrypted connections with full certificate verification (`sslmode=verify-full`). All communications between your client device and our servers are encrypted in transit via Transport Layer Security (TLS 1.3).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">6. Your Rights Under the DPDP Act</h2>
            <p className="mb-2">As a Data Principal, you maintain the following statutory rights:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong className="text-[var(--theme-text)]">Right to Access:</strong> Request a summary of personal data held by AVODAH.</li>
              <li><strong className="text-[var(--theme-text)]">Right to Correction &amp; Erasure:</strong> Request the correction of inaccuracies or complete deletion of your records.</li>
              <li><strong className="text-[var(--theme-text)]">Right of Grievance Redressal:</strong> Direct compliance questions or grievances to our Data Protection Desk.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-serif text-[var(--theme-text)] mb-3">7. Grievance Redressal &amp; Inquiries</h2>
            <p>
              To exercise your data protection rights or submit an inquiry, please contact our Compliance Desk at{" "}
              <a href="mailto:privacy@avodahgroup.co" className="text-[var(--theme-accent)] hover:underline">
                privacy@avodahgroup.co
              </a>
              {" "}or via written communication to our Mumbai headquarters at Bandra Kurla Complex (BKC), Mumbai.
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--theme-border)]">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-mono tracking-widest uppercase text-[var(--theme-accent)] hover:underline"
            >
              ← Return to AVODAH Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

