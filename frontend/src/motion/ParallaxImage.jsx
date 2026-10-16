import { useEffect, useRef } from "react";
import { isSmallScreen, prefersReducedMotion } from "./env.js";

/* useParallax: writes --py (px) on the element while it is near the viewport.
   Lighter on small screens, off for reduced motion. Transform-only, rAF-throttled. */
export function useParallax(ref, speed = 0.12) {
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return undefined;
    const k = isSmallScreen() ? speed * 0.45 : speed;
    let visible = false, frame = 0;
    const update = () => {
      frame = 0;
      const r = el.parentElement.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -k;
      el.style.setProperty("--py", `${offset.toFixed(1)}px`);
    };
    const onScroll = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) onScroll(); }, { rootMargin: "100px" });
    io.observe(el.parentElement);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref, speed]);
}

/* ParallaxImage: decorative background layer (CSS background) or <img> with parallax + cinematic zoom. */
export default function ParallaxImage({ className = "", speed = 0.12, src, alt = "", loading = "lazy", width, height, children, ...rest }) {
  const ref = useRef(null);
  useParallax(ref, speed);
  if (src) {
    return (
      <div className={`px-frame ${className}`.trim()} {...rest}>
        <img ref={ref} className="px-layer" src={src} alt={alt} loading={loading} decoding="async" width={width} height={height} />
        {children}
      </div>
    );
  }
  return <div ref={ref} className={`px-layer ${className}`.trim()} aria-hidden="true" {...rest} />;
}
