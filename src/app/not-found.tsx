import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import ThreeArchitecturalBackground from "@/components/ThreeArchitecturalBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeralBlobShowcase from "@/components/feral/FeralBlobShowcase";

export const metadata: Metadata = {
  title: "Page Not Found — AVODAH",
  description: "The page you are looking for does not exist or has been moved.",
  alternates: { canonical: null },
};

const QUICK_LINKS = [
  { name: "Sole Selling Mandates", href: "/mandate" },
  { name: "Leasing & Investment Advisory", href: "/leasing-and-investment-advisory" },
  { name: "Research & Insights", href: "/research" },
  { name: "Who We Are", href: "/who-we-are" },
];

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300 flex flex-col">
      <CustomCursor />
      <ThreeArchitecturalBackground />
      <Navigation />

      <section className="relative z-10 flex-1 flex items-center pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-6xl w-full mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Golden blob mascot — first on mobile, right column on desktop */}
            <div className="order-first lg:order-last flex justify-center">
              <FeralBlobShowcase theme="notfound" />
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[var(--theme-accent)]">
                  Error 404 • Page Not Found
                </span>
              </div>

              <p
                aria-hidden="true"
                className="font-serif text-[96px] sm:text-[150px] leading-none font-light tracking-tight text-[var(--theme-accent)] opacity-90 select-none"
              >
                404
              </p>

              <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] tracking-tight mt-4 mb-5">
                This address isn&apos;t on our map.
              </h1>
              <p className="text-sm sm:text-base text-[var(--theme-text-muted)] font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                The page you&apos;re looking for doesn&apos;t exist, has moved, or isn&apos;t available to you.
                Let&apos;s get you back to solid ground.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--theme-accent)] text-white dark:text-[#0c0d0c] text-xs font-bold tracking-[0.18em] uppercase rounded-sm hover:brightness-110 transition-all duration-200 shadow-md shadow-[var(--theme-accent)]/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--theme-surface-glass)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-all duration-200 backdrop-blur-md"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--theme-border)] text-center">
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--theme-text-muted)] mb-4">
              Popular destinations
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
