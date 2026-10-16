import { useEffect, useState } from "react";
import useInView from "./useInView.js";
import { prefersReducedMotion } from "./env.js";

/* CountUp: counts 0 -> end every time it enters the viewport and resets to 0 when it leaves.
   The exact original value is what screen readers get (and what reduced-motion users see). */
export default function CountUp({ end, suffix = "", prefix = "", pad = 0, duration = 1400, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: "0px" });
  const [value, setValue] = useState(prefersReducedMotion() ? end : 0);
  const fmt = (n) => `${prefix}${String(n).padStart(pad, "0")}${suffix}`;

  useEffect(() => {
    if (prefersReducedMotion()) { setValue(end); return undefined; }
    if (!inView) { setValue(0); return undefined; }
    let frame;
    let t0 = null;
    const tick = (now) => {
      if (t0 === null) t0 = now; // first frame is the start, so clocks can never disagree
      const p = Math.min(Math.max((now - t0) / duration, 0), 1);
      setValue(Math.round(end * (1 - (1 - p) ** 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={`countup ${className}`.trim()}>
      <span className="sr-only">{fmt(end)}</span>
      <span aria-hidden="true">{fmt(value)}</span>
    </span>
  );
}
