"use client";

import React, { useEffect, useState } from "react";
import { ExternalLink, KeyRound, LogOut, ShieldCheck } from "lucide-react";

const ENDPOINTS = [
  { name: "Contact enquiries", href: "/api/contact", note: "?limit=100 &service=…" },
  { name: "Career applications", href: "/api/careers", note: "?department=…" },
  { name: "Newsletter subscribers", href: "/api/newsletter", note: "count" },
  { name: "Waitlist reservations", href: "/api/waitlist", note: "counts by platform" },
  { name: "System health", href: "/api/health", note: "with record counts" },
];

export default function AdminClient() {
  const [status, setStatus] = useState<"loading" | "signedOut" | "signedIn">("loading");
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data) => setStatus(data.authenticated ? "signedIn" : "signedOut"))
      .catch(() => setStatus("signedOut"));
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Sign in failed.");
      setKey("");
      setStatus("signedIn");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    setStatus("signedOut");
  };

  return (
    <div className="w-full max-w-md p-8 sm:p-10 rounded-sm bg-[var(--theme-surface-glass)] border border-[var(--theme-border)] shadow-[var(--theme-card-shadow)] backdrop-blur-xl">
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--theme-accent)]">
          AVODAH • Admin
        </span>
      </div>

      {status === "loading" && (
        <p className="text-sm text-[var(--theme-text-muted)] font-light">Checking session…</p>
      )}

      {status === "signedOut" && (
        <>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal mb-2">Sign in</h1>
          <p className="text-xs text-[var(--theme-text-muted)] font-light mb-6">
            Enter the admin API key to view submitted data in this browser for 8 hours.
          </p>
          <form onSubmit={handleSignIn} className="space-y-4">
            <label className="block">
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--theme-text-muted)]">
                Admin API key
              </span>
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                required
                autoComplete="current-password"
                className="mt-1.5 w-full px-3 py-2.5 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-sm text-sm text-[var(--theme-text)] focus:border-[var(--theme-accent)] outline-none font-mono"
              />
            </label>
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-sm text-xs text-red-400">{error}</div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-[var(--theme-accent)] text-white dark:text-[#0c0d0c] font-bold text-xs uppercase tracking-[0.18em] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </>
      )}

      {status === "signedIn" && (
        <>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal mb-2 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[var(--theme-accent)]" />
            Signed in
          </h1>
          <p className="text-xs text-[var(--theme-text-muted)] font-light mb-6">
            These open as raw JSON in a new tab. The session lasts 8 hours.
          </p>
          <ul className="space-y-2 mb-6">
            {ENDPOINTS.map((ep) => (
              <li key={ep.href}>
                <a
                  href={ep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-sm border border-[var(--theme-border)] hover:border-[var(--theme-accent)] transition-colors group"
                >
                  <span>
                    <span className="block text-sm text-[var(--theme-text)] group-hover:text-[var(--theme-accent)]">
                      {ep.name}
                    </span>
                    <span className="block text-[10px] font-mono text-[var(--theme-text-muted)]">
                      {ep.href} {ep.note}
                    </span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-[var(--theme-text-muted)] group-hover:text-[var(--theme-accent)]" />
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSignOut}
            className="w-full py-2.5 border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
