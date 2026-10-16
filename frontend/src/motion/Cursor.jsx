import { useEffect, useRef } from "react";
import { finePointerQuery, prefersReducedMotion } from "./env.js";

const INTERACTIVE = "a, button, [role='button'], summary, label[for]";
const TEXT = "input, textarea, select, [contenteditable='true']";

/* Cursor: dot + trailing ring. Mounted only for fine pointers; inert on touch/tablet. */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const q = finePointerQuery();
    if (!q.matches || prefersReducedMotion()) return undefined;
    const d = dot.current, r = ring.current;
    const body = document.body;
    let x = -100, y = -100, rx = -100, ry = -100, frame = 0, shown = false;

    const loop = () => {
      rx += (x - rx) * 0.17;
      ry += (y - ry) * 0.17;
      d.style.transform = `translate3d(${x}px,${y}px,0)`;
      r.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      frame = requestAnimationFrame(loop);
    };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (!shown) { shown = true; rx = x; ry = y; body.classList.add("av-cursor-on"); }
    };
    const over = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      body.dataset.cursor = t.closest(TEXT) ? "text" : t.closest("[data-cursor='image']") ? "image" : t.closest(INTERACTIVE) ? "link" : "";
    };
    const out = (e) => { if (!e.relatedTarget) { shown = false; body.classList.remove("av-cursor-on"); } };
  
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerout", out);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      body.classList.remove("av-cursor-on");
      delete body.dataset.cursor;
    };
  }, []);

  return (
    <>
      <span ref={ring} className="av-cur-ring" aria-hidden="true" />
      <span ref={dot} className="av-cur-dot" aria-hidden="true" />
    </>
  );
}
