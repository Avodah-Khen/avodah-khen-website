import { useEffect, useRef, useState } from "react";
import { useParallax } from "./ParallaxImage.jsx";
import { isSmallScreen, prefersReducedMotion } from "./env.js";

/* Cinematic hero background.
   - The element keeps its CSS background-image as the poster, so the first paint never waits for video.
   - Video loads only when motion is allowed and the connection is not slow / data-saver.
   - Small screens request the lighter mobile file.
   - Plays only while on screen. If no source loads, the poster simply stays.
   Drop files in /public/videos: hero.mp4 (+ hero.webm optional) and hero-mobile.mp4. */
export default function HeroVideo({ className = "", speed = 0.14, poster, desktop = ["/videos/hero.webm", "/videos/hero.mp4"], mobile = ["/videos/hero-mobile.mp4"] }) {
  const wrap = useRef(null);
  const vid = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [sources, setSources] = useState([]);
  useParallax(wrap, speed);

  useEffect(() => {
    const c = typeof navigator !== "undefined" ? navigator.connection : null;
    const slow = c && (c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || ""));
    if (prefersReducedMotion() || slow) return;
    setSources(isSmallScreen() ? mobile : desktop);
    setEnabled(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const v = vid.current;
    if (!enabled || !v) return undefined;
    v.muted = true;
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { const p = v.play && v.play(); if (p && p.catch) p.catch(() => {}); }
      else if (v.pause) v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [enabled, sources]);

  const type = (s) => (s.endsWith(".webm") ? "video/webm" : "video/mp4");

  return (
    <div ref={wrap} className={`${className} px-layer hero-media`.trim()} aria-hidden="true">
      {enabled && (
        <video
          ref={vid}
          className={`hero-video${ready ? " is-ready" : ""}`}
          muted loop playsInline autoPlay preload="metadata" tabIndex={-1}
          poster={poster}
          onCanPlay={() => setReady(true)}
        >
          {sources.map((s, i) => (
            <source key={s} src={s} type={type(s)} onError={i === sources.length - 1 ? () => setEnabled(false) : undefined} />
          ))}
        </video>
      )}
    </div>
  );
}
