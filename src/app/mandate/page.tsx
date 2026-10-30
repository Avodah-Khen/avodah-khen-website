import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import ThreeArchitecturalBackground from "@/components/ThreeArchitecturalBackground";
import SparkleBackground from "@/components/SparkleBackground";
import Navigation from "@/components/Navigation";
import MandateClient from "@/components/mandate/MandateClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sole Selling Partner & Developer Mandates — AVODAH",
  description:
    "Appoint AVODAH as your Sole Selling Partner in Mumbai. Exclusive sales mandates, brand strategy and pricing discipline, backed by 20+ years of experience.",
  alternates: { canonical: "/mandate" },
  keywords: [
    "Sole Selling Partner Mumbai",
    "Real Estate Mandates India",
    "Developer Sales Mandates",
    "Brand Mandates Real Estate",
    "Exclusive Project Marketing Mumbai",
    "Avodah Mandates",
    "Real Estate Pricing Strategy",
  ],
  openGraph: {
    title: "Sole Selling Partner & Developer Mandates — AVODAH",
    description:
      "Backed by 20+ years of domain experience, Avodah supports real estate developers across Mumbai with structured exclusive mandate models.",
    type: "website",
  },
};

export default function MandatePage() {
  return (
    <main className="relative isolate min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300">
      {/* Physics-based Custom Mouse Cursor */}
      <CustomCursor />

      {/* 3D WebGL Architectural Grid Background */}
      <ThreeArchitecturalBackground />

      {/* Interactive Golden Starlight & Sparkle Field throughout the website */}
      <SparkleBackground />

      {/* Sticky Top Luxury Navigation with Dropdown Menus */}
      <Navigation />

      {/* Main Interactive Mandate Experience */}
      <MandateClient />

      {/* Architectural Colophon & Footer */}
      <Footer />
    </main>
  );
}
