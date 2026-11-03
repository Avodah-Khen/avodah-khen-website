"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles, FileCheck, Wallet, PhoneCall } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const DESKTOP_FRAMES = 300;
const MOBILE_FRAMES = 150;

// Helper: Format frame filename (001 ... 300)
const formatFrameIdx = (num: number) => String(num).padStart(3, "0");

const getFrameSrc = (num: number, isMobile: boolean) =>
  isMobile
    ? `/assets/video-frames/mobile/frame-${formatFrameIdx(num)}.jpg`
    : `/assets/video-frames/ezgif-frame-${formatFrameIdx(num)}.jpg`;

// Safe idle scheduler fallback
const scheduleIdleWork = (cb: () => void, timeout = 300): number => {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    return (window as unknown as { requestIdleCallback: (fn: () => void, opt?: { timeout: number }) => number }).requestIdleCallback(cb, { timeout });
  }
  return setTimeout(cb, 80) as unknown as number;
};

const cancelIdleWork = (handle: number) => {
  if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
    (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
  } else {
    clearTimeout(handle);
  }
};

/**
 * Magnetic Physics Wrapper: Clean container (magnet physics removed per request)
 */
function MagneticPhysicsWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  return <div className={className}>{children}</div>;
}

interface StageInfo {
  id: string;
  min: number;
  max: number;
  targetPct: number;
  phaseNumber: string;
  phaseTitle: string;
  title: string;
  subtitle: string;
  tags: string[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  alignment: "left" | "right" | "center";
}

const STAGES: StageInfo[] = [
  {
    id: "stage-1",
    min: 0.0,
    max: 0.14,
    targetPct: 0.0,
    phaseNumber: "01",
    phaseTitle: "ARCHITECTURAL HERO",
    title: "Where Vision\nMeets Reality.",
    subtitle:
      "A disciplined, design-led advisory firm orchestrating premier developer mandates, high-value commercial leasing, and connected PropTech intelligence across the Mumbai Metropolitan Region.",
    tags: ["20+ Years Heritage", "Mumbai Micro-Markets", "Sole Selling Partner"],
    primaryCtaText: "Explore Architectural Journey",
    primaryCtaHref: "#about",
    secondaryCtaText: "Developer Mandates Inquiry",
    secondaryCtaHref: "#contact",
    alignment: "left",
  },
  {
    id: "stage-2",
    min: 0.16,
    max: 0.32,
    targetPct: 0.24,
    phaseNumber: "02",
    phaseTitle: "SOLE SELLING MANDATES",
    title: "Mandates - We Sell Differently.\n We Build technology behind it.",
    subtitle:
      "We help real estate developers maximize sales through exclusive mandates, strategic positioning, dedicated sales teams, and technology-driven execution—from pre-launch planning to final inventory closure.",
    tags: ["Sole Selling Mandates", "Brand Representation", "Developer Solutions"],
    primaryCtaText: "Developer Mandate Model",
    primaryCtaHref: "/mandate",
    alignment: "right",
  },
  {
    id: "stage-3",
    min: 0.34,
    max: 0.50,
    targetPct: 0.42,
    phaseNumber: "03",
    phaseTitle: "LIVING SPACES & PROPTECH",
    title: "Proptech",
    subtitle:
      "We built a 360° proptech Platform that is the core funnel the way, Real Estate is Discovered, Distributed and Sold through our Portal and App",
    tags: ["PropTech Discovery", "Smart Portals", "Connected Workflows"],
    secondaryCtaText: "Explore PropTech Platform",
    secondaryCtaHref: "/proptech",
    alignment: "left",
  },
  {
    id: "stage-4",
    min: 0.52,
    max: 0.68,
    targetPct: 0.60,
    phaseNumber: "04",
    phaseTitle: "STRATEGIC CAPITAL",
    title: "Fintech",
    subtitle:
      "A comprehensive Fintech Platform that simplifies access to loans and financials products through a Single Digital Destination.",
    tags: ["Property Loans", "Financial Products", "Single Digital Destination"],
    secondaryCtaText: "Explore FinTech Platform",
    secondaryCtaHref: "/fintech",
    alignment: "right",
  },
  {
    id: "stage-5",
    min: 0.70,
    max: 0.85,
    targetPct: 0.77,
    phaseNumber: "05",
    phaseTitle: "THE COMPLETE HORIZON",
    title: "Let's Shape\nWhat Comes Next.",
    subtitle:
      "Connect with Avodah to explore exclusive mandate opportunities, portfolio acquisitions, and institutional partnerships across the Mumbai Metropolitan Region.",
    tags: ["Sole Selling Mandates", "Leasing & Investments", "PropTech Advisory"],
    primaryCtaText: "Schedule Institutional Consultation",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Review Firm Profile",
    secondaryCtaHref: "/who-we-are",
    alignment: "center",
  },
];

export default function ArchitecturalCanvasSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Loading & Telemetry
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPreloaderDismissed, setIsPreloaderDismissed] = useState(false);
  const [activeStage, setActiveStage] = useState<StageInfo>(STAGES[0]);
  const activeStageRef = useRef<StageInfo>(STAGES[0]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Responsive device state & frame counts
  const isMobileRef = useRef<boolean>(false);
  const totalFramesRef = useRef<number>(DESKTOP_FRAMES);
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Frame Cache Refs (1-indexed for clarity: index 1 to 300)
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(DESKTOP_FRAMES + 1).fill(null));
  const loadedFlagsRef = useRef<boolean[]>(new Array(DESKTOP_FRAMES + 1).fill(false));
  const requestedRef = useRef<Set<number>>(new Set());
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);

  // Find nearest loaded frame to eliminate flickering
  const getClosestLoadedFrame = useCallback((targetIdx: number): HTMLImageElement | null => {
    const total = totalFramesRef.current;
    const clamped = Math.max(1, Math.min(total, targetIdx));
    if (loadedFlagsRef.current[clamped]) {
      return imagesRef.current[clamped];
    }
    for (let offset = 1; offset < total; offset++) {
      const prev = clamped - offset;
      if (prev >= 1 && loadedFlagsRef.current[prev]) {
        return imagesRef.current[prev];
      }
      const next = clamped + offset;
      if (next <= total && loadedFlagsRef.current[next]) {
        return imagesRef.current[next];
      }
    }
    return imagesRef.current[1] || null;
  }, []);

  // Canvas Drawing with Responsive Aspect Ratio Cover & Theme Background
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = getClosestLoadedFrame(frameIndex);
      if (!img) return;

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      // Theme-aware canvas background clear
      ctx.fillStyle = isLight ? "#F6F4EE" : "#0c0d0c";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Cover math
      const imgWidth = img.naturalWidth || 1920;
      const imgHeight = img.naturalHeight || 1080;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let renderWidth = 0;
      let renderHeight = 0;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderWidth = canvasWidth;
        renderHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - renderHeight) / 2;
      } else {
        renderHeight = canvasHeight;
        renderWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - renderWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    },
    [getClosestLoadedFrame, isLight]
  );

  // Resize Canvas to device pixel ratio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile uses pixel ratio 1 for GPU performance; desktop uses up to 2
    const dpr = isMobileRef.current ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = isMobileRef.current ? "medium" : "high";

    drawFrame(Math.round(currentFrameRef.current));
  }, [drawFrame]);

  // Frame Loading & Streaming Orchestration
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    isMobileRef.current = isMobile;
    const total = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
    totalFramesRef.current = total;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    prefersReducedMotionRef.current = prefersReducedMotion;

    // Direct single frame loader
    const loadSingle = (idx: number, onDone?: () => void) => {
      const maxFrames = totalFramesRef.current;
      if (idx < 1 || idx > maxFrames || requestedRef.current.has(idx) || loadedFlagsRef.current[idx]) {
        onDone?.();
        return;
      }
      requestedRef.current.add(idx);
      const img = new Image();
      img.src = getFrameSrc(idx, isMobileRef.current);
      img.onload = () => {
        imagesRef.current[idx] = img;
        loadedFlagsRef.current[idx] = true;
        onDone?.();
      };
      img.onerror = () => {
        onDone?.();
      };
    };

    // Load initial immediate window around start (frames 1..6)
    const loadInitialWindow = () => {
      for (let i = 2; i <= Math.min(8, total); i++) {
        loadSingle(i);
      }
    };

    // Idle streaming: loads remaining frames in background idle slices
    let idleId: number | null = null;
    let nextIdleFrame = 2;

    const streamIdle = () => {
      const maxFrames = totalFramesRef.current;
      if (nextIdleFrame > maxFrames || prefersReducedMotionRef.current) return;

      while (
        nextIdleFrame <= maxFrames &&
        (requestedRef.current.has(nextIdleFrame) || loadedFlagsRef.current[nextIdleFrame])
      ) {
        nextIdleFrame++;
      }

      if (nextIdleFrame <= maxFrames) {
        const toLoad = nextIdleFrame;
        nextIdleFrame++;
        loadSingle(toLoad, () => {
          idleId = scheduleIdleWork(streamIdle, 300);
        });
      }
    };

    // Immediate Frame 1 Fetch: Preloader dismisses as soon as frame 1 draws
    loadSingle(1, () => {
      drawFrame(1);
      setLoadProgress(100);
      setIsPreloaderDismissed(true);
      loadInitialWindow();
      if (!prefersReducedMotion) {
        idleId = scheduleIdleWork(streamIdle, 400);
      }
    });

    // Safety fallback: guaranteed dismissal within 800ms max so user is never blocked
    const fallbackTimer = setTimeout(() => {
      setIsPreloaderDismissed(true);
      setLoadProgress(100);
    }, 800);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(fallbackTimer);
      if (idleId !== null) {
        cancelIdleWork(idleId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame, handleResize]);

  // Re-draw on theme change
  useEffect(() => {
    drawFrame(Math.round(currentFrameRef.current));
  }, [isLight, drawFrame]);

  // Scroll Progress Orchestration & Smooth Momentum Lerp Loop (Stops when idle)
  useEffect(() => {
    const loadSingleAhead = (idx: number) => {
      const maxFrames = totalFramesRef.current;
      if (idx < 1 || idx > maxFrames || requestedRef.current.has(idx) || loadedFlagsRef.current[idx]) {
        return;
      }
      requestedRef.current.add(idx);
      const img = new Image();
      img.src = getFrameSrc(idx, isMobileRef.current);
      img.onload = () => {
        imagesRef.current[idx] = img;
        loadedFlagsRef.current[idx] = true;
      };
    };

    const loadWindowAhead = (centerFrame: number) => {
      const maxFrames = totalFramesRef.current;
      const start = Math.max(1, centerFrame - 3);
      const end = Math.min(maxFrames, centerFrame + 10);
      for (let i = start; i <= end; i++) {
        loadSingleAhead(i);
      }
    };

    let animId: number | null = null;

    // Physics loop only runs while actively lerping; stops when resting (0% idle CPU)
    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * 0.18;
        const total = totalFramesRef.current;
        const rounded = Math.max(1, Math.min(total, Math.round(currentFrameRef.current)));
        drawFrame(rounded);
        animId = requestAnimationFrame(tick);
      } else {
        currentFrameRef.current = targetFrameRef.current;
        const total = totalFramesRef.current;
        const rounded = Math.max(1, Math.min(total, Math.round(currentFrameRef.current)));
        drawFrame(rounded);
        animId = null; // Idle: stop RAF loop completely
      }
    };

    const startLoopIfNeeded = () => {
      if (animId === null && !prefersReducedMotionRef.current) {
        animId = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Direct DOM update for progress bar (no React re-render)
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      // If reduced motion is requested, do not scrub frames
      if (prefersReducedMotionRef.current) return;

      // Map progress to frame index [1, totalFrames]
      const total = totalFramesRef.current;
      const frameIndex = 1 + Math.round(progress * (total - 1));
      targetFrameRef.current = frameIndex;

      // Stream frames in the direction of scroll immediately
      loadWindowAhead(frameIndex);

      // Start physics RAF loop if not already running
      startLoopIfNeeded();

      // Update active stage only when boundary crossed
      const currentStage = STAGES.find((s) => progress >= s.min && progress <= s.max);
      if (currentStage && currentStage.id !== activeStageRef.current.id) {
        activeStageRef.current = currentStage;
        setActiveStage(currentStage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animId !== null) {
        cancelAnimationFrame(animId);
      }
    };
  }, [drawFrame]);

  // Touch handlers for mobile devices
  const handleTouchMove = () => {};
  const handleTouchEnd = () => {};

  // Smooth jump to specific narrative chapter
  const scrollToStage = (stage: StageInfo) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollableHeight = container.offsetHeight - window.innerHeight;
    const targetY = container.offsetTop + stage.targetPct * scrollableHeight;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[580vh] bg-[var(--theme-bg)] transition-colors duration-300"
    >
      <div className="sticky top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center">
        {/* Cinematic Preloader: Disappears immediately once frame 1 is ready */}
        <AnimatePresence>
          {!isPreloaderDismissed && (
            <motion.div
              key="hero-preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 z-50 bg-[var(--theme-bg)] flex flex-col items-center justify-center gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-[var(--theme-accent)]/20 border-t-[var(--theme-accent)] animate-spin" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl tracking-[0.2em] text-[var(--theme-text)]">
                  AVODAH
                </span>
              </div>
              <div className="w-56 h-[2px] bg-[var(--theme-border)] relative overflow-hidden rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-[var(--theme-accent)] transition-all duration-150"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <span className="text-[11px] tracking-[0.25em] text-[var(--theme-text-muted)] uppercase font-mono">
                Loading Architectural Sequence {loadProgress}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean Stable Canvas Container (Parallax tilt removed) */}
        <div className="absolute inset-0 w-full h-full">
          {/* HTML5 Canvas Rendering Synchronized High-Res Frames */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-[1]" />

          {/* Vignette & Atmospheric Gradients */}
          <div
            className="absolute inset-0 pointer-events-none z-[2] transition-opacity duration-500"
            style={{
              background: isLight
                ? "transparent"
                : "radial-gradient(circle at center, transparent 35%, rgba(12,13,12,0.45) 75%, rgba(12,13,12,0.88) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[2]"
            style={{
              background: isLight
                ? "transparent"
                : `linear-gradient(to top, var(--theme-bg), transparent)`,
            }}
          />
        </div>

        {/* 3D Architectural Telemetry HUD */}
        <div className="absolute inset-0 z-20 pointer-events-none p-4 sm:p-8 md:p-10 flex flex-col justify-between">
          {/* HUD Top Bar */}
          <div className="flex items-center justify-between mt-[76px] sm:mt-[84px] md:mt-[90px]">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.2em] text-[var(--theme-accent)] uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)] shadow-[0_0_10px_var(--theme-accent)] animate-pulse" />
              <span>19°04&apos;33&quot;N 72°52&apos;39&quot;E</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">MUMBAI MMR</span>
            </div>
          </div>

          {/* HUD Bottom Bar (Frames counter removed per user request) */}
          <div className="flex items-end justify-end">
            <div className="flex flex-col items-end gap-1.5 w-32 sm:w-52">
              <span className="text-[8px] sm:text-[9px] tracking-[0.22em] text-[var(--theme-text-muted)] uppercase font-medium">
                SCROLL TO NAVIGATE
              </span>
              <div className="w-full h-[2px] bg-[var(--theme-border)] relative rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-accent-light)] transition-all duration-75"
                  ref={progressBarRef}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Overlays */}
        <div className="absolute inset-x-0 bottom-0 top-[76px] sm:top-[88px] md:top-[92px] z-30 pointer-events-none flex items-center justify-center p-2.5 sm:p-5 md:p-6 pb-6 sm:pb-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeStage.id === "stage-1" ? (
              /* Stage 01 */
              <motion.div
                key="hero-stage-1"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                className="w-full max-w-xl mx-auto pointer-events-auto relative px-2 my-auto"
              >
                <div className="relative w-full">
                  <div className="relative rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-glass)]/92 backdrop-blur-2xl p-3 sm:p-4.5 md:p-5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 hover:border-[var(--theme-accent)]/60 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.6)]">
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent opacity-85" />

                    <div className="relative z-20 flex flex-col items-center text-center">
                      <MagneticPhysicsWrapper className="mb-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-glass)] shadow-xs backdrop-blur-md">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--theme-accent)] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--theme-accent)]" />
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--theme-accent)]">
                            REAL ESTATE. REIMAGINED WITH PROPTECH
                          </span>
                        </div>
                      </MagneticPhysicsWrapper>

                      <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal text-[var(--theme-text)] leading-[1.14] tracking-tight mb-2 max-w-xl">
                        Technology-driven solutions.{" "}
                        <span className="italic font-light text-[var(--theme-accent)]">
                          Transforming the way real estate moves.
                        </span>
                      </h1>

                      <p className="text-[11px] sm:text-xs text-[var(--theme-text)] opacity-85 leading-relaxed font-light mb-2.5 max-w-lg mx-auto">
                        We combine real estate expertise with technology to make buying, selling and investing in property simpler, smarter and more transparent. Where Vision Meets Structural Reality.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-full max-w-lg mb-2.5">
                        {[
                          { value: "PropTech", label: "Smart Prop Solutions", icon: Sparkles, href: "/proptech" },
                          { value: "Mandates", label: "Exclusive Mandates", icon: FileCheck, href: "/mandate" },
                          { value: "AI Voice Bot", label: "AI-Powered Calling", icon: PhoneCall, href: "/ai-voice-bot" },
                          { value: "Fintech", label: "Real Estate Financing", icon: Wallet, href: "/fintech" },
                        ].map((stat, i) => {
                          const Icon = stat.icon;
                          return (
                            <MagneticPhysicsWrapper key={i} className="w-full">
                              <Link
                                href={stat.href}
                                className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md border border-[var(--theme-border)] bg-[var(--theme-surface-glass)]/90 backdrop-blur-md shadow-xs group hover:border-[var(--theme-accent)] hover:shadow-xs transition-all duration-200 cursor-pointer block"
                              >
                                <div className="flex items-center gap-1 mb-0.5">
                                   <Icon className="w-2.5 h-2.5 text-[var(--theme-accent)] opacity-80 group-hover:scale-110 transition-transform shrink-0" />
                                  <span className="font-serif text-xs sm:text-sm font-semibold text-[var(--theme-text)] whitespace-nowrap">
                                    {stat.value}
                                  </span>
                                </div>
                                <span className="text-[7.5px] sm:text-[8px] tracking-wider uppercase text-[var(--theme-text-muted)] font-medium text-center">
                                  {stat.label}
                                </span>
                              </Link>
                            </MagneticPhysicsWrapper>
                          );
                        })}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto mb-2.5">
                        <MagneticPhysicsWrapper className="w-full sm:w-auto">
                          <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[var(--theme-accent)] text-white dark:text-[#0c0d0c] text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase rounded-sm hover:brightness-110 transition-all duration-200 shadow-md shadow-[var(--theme-accent)]/20 hover:-translate-y-0.5 cursor-pointer"
                          >
                            <span>Talk to our team</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </MagneticPhysicsWrapper>

                        <MagneticPhysicsWrapper className="w-full sm:w-auto">
                          <Link
                            href="/proptech"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[var(--theme-surface-glass)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase rounded-sm transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 shadow-xs"
                          >
                            <span>Explore PropTech</span>
                          </Link>
                        </MagneticPhysicsWrapper>
                      </div>

                      <div className="flex items-center justify-between gap-3 w-full pt-1.5 border-t border-[var(--theme-border)]/40 text-[9px]">
                        <div className="hidden sm:flex items-center gap-1.5">
                          <span className="uppercase tracking-widest text-[var(--theme-text-muted)] mr-1 font-medium text-[8.5px]">
                            Chapters:
                          </span>
                          {STAGES.map((stage) => (
                            <button
                              key={stage.id}
                              onClick={() => scrollToStage(stage)}
                              className={`text-[8.5px] tracking-[0.12em] uppercase font-semibold px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                                activeStage.id === stage.id
                                  ? "bg-[var(--theme-accent)] text-white dark:text-[#0c0d0c]"
                                  : "text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-glass)]"
                              }`}
                            >
                              {stage.phaseNumber}
                            </button>
                          ))}
                        </div>

                        <motion.div
                          animate={{ y: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                          className="flex items-center gap-1.5 opacity-75 hover:opacity-100 cursor-pointer text-[var(--theme-text-muted)] hover:text-[var(--theme-accent)] transition-colors mx-auto sm:mx-0"
                          onClick={() => scrollToStage(STAGES[1])}
                        >
                          <span className="text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase font-medium">
                            Scroll to navigate
                          </span>
                          <ChevronDown className="w-3 h-3 text-[var(--theme-accent)]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Stages 02 - 05 */
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-xl pointer-events-auto ${
                  activeStage.alignment === "left"
                    ? "mr-auto ml-0 text-left"
                    : activeStage.alignment === "right"
                    ? "ml-auto mr-0 text-left"
                    : "mx-auto text-center"
                }`}
              >
                <div className="relative w-full">
                  <div className="p-4 sm:p-7 md:p-8 rounded-2xl bg-[var(--theme-surface-glass)]/92 backdrop-blur-2xl border border-[var(--theme-border)] shadow-[var(--theme-shadow)] relative group hover:border-[var(--theme-accent)]/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-14 h-[2px] bg-[var(--theme-accent)]" />

                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[var(--theme-text)] leading-[1.12] mb-3 tracking-tight whitespace-pre-line">
                      {activeStage.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[var(--theme-text)] opacity-85 leading-relaxed font-light mb-4 sm:mb-5 max-w-lg">
                      {activeStage.subtitle}
                    </p>

                    <div
                      className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${
                        activeStage.alignment === "center" ? "justify-center" : ""
                      }`}
                    >
                      {activeStage.primaryCtaText && (
                        <MagneticPhysicsWrapper>
                          <Link
                            href={activeStage.primaryCtaHref || "#contact"}
                            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-[var(--theme-accent)] text-white dark:text-[#0c0d0c] text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase rounded-sm hover:brightness-110 transition-all duration-200 shadow-md shadow-[var(--theme-accent)]/20 hover:-translate-y-0.5"
                          >
                            <span>{activeStage.primaryCtaText}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </MagneticPhysicsWrapper>
                      )}

                      {activeStage.secondaryCtaText && (
                        <MagneticPhysicsWrapper>
                          <Link
                            href={activeStage.secondaryCtaHref || "#services"}
                            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-transparent border border-[var(--theme-border)] text-[var(--theme-text)] text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase rounded-sm hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <span>{activeStage.secondaryCtaText}</span>
                          </Link>
                        </MagneticPhysicsWrapper>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
