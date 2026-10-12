import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./env.js";

const OUT_MS = 240;

/* PageTransition: old page fades/lifts out (~240ms), new page rises in (~500ms).
   Driven by the route key only, so hash back/forward behave exactly as before. */
export default function PageTransition({ routeKey, children, id }) {
  const [shown, setShown] = useState({ key: routeKey, node: children });
  const [phase, setPhase] = useState("in");
  const first = useRef(true);
  const timer = useRef(0);
  const box = useRef(null);
  const latest = useRef(children);
  latest.current = children;

  useEffect(() => {
    if (shown.key === routeKey) {
      // same route re-render (e.g. search overlay state): keep node fresh
      setShown((s) => (s.node === children ? s : { key: s.key, node: children }));
      return undefined;
    }
    clearTimeout(timer.current);
    const swap = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setShown({ key: routeKey, node: latest.current });
      setPhase("in");
      if (!first.current && box.current) box.current.focus({ preventScroll: true });
    };
    if (prefersReducedMotion()) { swap(); return undefined; }
    setPhase("out");
    timer.current = window.setTimeout(swap, OUT_MS);
    return () => clearTimeout(timer.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  useEffect(() => { first.current = false; }, []);

  return (
    <div id={id} ref={box} tabIndex={-1} className={`pt pt-${phase}`}>
      <div key={shown.key} className="pt-page">{shown.node}</div>
    </div>
  );
}
