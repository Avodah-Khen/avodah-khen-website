import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import ThreeArchitecturalBackground from "@/components/ThreeArchitecturalBackground";
import SparkleBackground from "@/components/SparkleBackground";
import Navigation from "@/components/Navigation";
import LaunchingSoonClient from "@/components/launching-soon/LaunchingSoonClient";

export const metadata: Metadata = {
  title: "AI Voice Bot — Launching Soon — AVODAH",
  description:
    "AVODAH AI Voice Bot, launching soon: voice AI for developers that answers leads in under 10 seconds, qualifies buyers and books site visits.",
  alternates: { canonical: "/ai-voice-bot" },
  keywords: [
    "AI Voice Bot Real Estate",
    "Real Estate Voice Agent Mumbai",
    "Autonomous Calling Bot Real Estate",
    "PropTech Voice AI",
    "Lead Qualification Voice Bot",
    "Automated Site Visit Scheduling",
    "Avodah AI Voice Bot",
    "Developer Sales Automation",
  ],
  openGraph: {
    title: "AI Voice Bot — Launching Soon — AVODAH",
    description:
      "Transforming cold inquiries into qualified site visits with human-parity voice AI, sub-450ms latency, and direct CRM synchronization.",
    type: "website",
  },
};

export default function VoiceBotPage() {
  return (
    <main className="relative isolate h-[100dvh] max-h-[100dvh] overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300">
      {/* Physics-based Custom Mouse Cursor */}
      <CustomCursor />

      {/* 3D WebGL Architectural Grid Background */}
      <ThreeArchitecturalBackground />

      {/* Interactive Golden Starlight & Sparkle Field throughout the website */}
      <SparkleBackground />

      {/* Sticky Top Luxury Navigation with Dropdown Menus */}
      <Navigation />

      {/* Single-Screen Visible Launching Soon Experience with Feral UI Blob */}
      <LaunchingSoonClient type="voicebot" />
    </main>
  );
}
