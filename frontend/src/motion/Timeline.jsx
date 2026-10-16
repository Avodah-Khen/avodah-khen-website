import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./env.js";

/* TimelineAnimation: drives --tl (0..1 line progress) and marks children .is-active
   as they pass ~72% of the viewport. axis "x" = horizontal row, "y" = vertical stack. */
export default function Timeline({ as: Tag = "div", axis = "x", className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const kids = () => Array.from(el.children);
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      el.style.setProperty("--tl", 1);
      kids().forEach((k) => k.classList.add("is-active"));
      return undefined;
    }
    let frame = 0, near = false;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight, line = vh * 0.72;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (line - r.top) / Math.max(r.height, 1)));
      el.style.setProperty("--tl", p.toFixed(3));
      kids().forEach((k) => {
        const kr = k.getBoundingClientRect();
        k.classList.toggle("is-active", kr.top < line);
      });
    };
    const onScroll = () => { if (near && !frame) frame = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { near = e.isIntersecting; if (near) onScroll(); }, { rootMargin: "20% 0px" });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <Tag ref={ref} data-tl={axis} className={`tl ${className}`.trim()} {...rest}>{children}</Tag>;
}
