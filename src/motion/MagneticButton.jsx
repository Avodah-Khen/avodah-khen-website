import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "./env.js";

/* MagneticButton: wraps any link/button. Desktop fine-pointer only; inert on touch. */
export default function MagneticButton({ strength = 0.22, className = "", children }) {
  const outer = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    const o = outer.current;
    const el = inner.current;
    if (!o || !el || !hasFinePointer() || prefersReducedMotion()) return undefined;
    let tx = 0, ty = 0, x = 0, y = 0, frame = 0;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0)`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(loop); };
    const move = (e) => {
      const r = o.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * strength;
      ty = (e.clientY - (r.top + r.height / 2)) * strength;
      kick();
    };
    const leave = () => { tx = 0; ty = 0; kick(); };
    o.addEventListener("pointermove", move);
    o.addEventListener("pointerleave", leave);
    return () => {
      o.removeEventListener("pointermove", move);
      o.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <span ref={outer} className={`mag ${className}`.trim()}>
      <span ref={inner} className="mag-inner">{children}</span>
    </span>
  );
}
