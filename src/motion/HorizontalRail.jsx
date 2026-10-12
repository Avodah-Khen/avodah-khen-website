import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./env.js";

/* HorizontalRail: scroll-snap track with prev/next controls and a progress line.
   Swipe on touch, arrows/keys on desktop. Keyboard reachable (the track is focusable). */
export default function HorizontalRail({ as: Tag = "div", label, className = "", children, ...rest }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    t.parentElement.style.setProperty("--rp", max > 0 ? (t.scrollLeft / max).toFixed(3) : 0);
    const start = t.scrollLeft <= 4;
    const end = t.scrollLeft >= max - 4;
    setEdge((e) => (e.start === start && e.end === end ? e : { start, end }));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir) => {
    const t = track.current;
    t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <div className="rail">
      <Tag ref={track} className={`rail-track ${className}`.trim()} role="group" aria-label={label} tabIndex={0} onScroll={update} {...rest}>
        {children}
      </Tag>
      <div className="rail-ctrl">
        <span className="rail-bar" aria-hidden="true"><i /></span>
        <button type="button" className="rail-btn" aria-label="Previous" disabled={edge.start} onClick={() => go(-1)}>←</button>
        <button type="button" className="rail-btn" aria-label="Next" disabled={edge.end} onClick={() => go(1)}>→</button>
      </div>
    </div>
  );
}
