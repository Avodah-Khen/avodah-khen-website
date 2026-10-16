import { useEffect, useRef, useState } from "react";

export default function useCountUp(end, startWhenVisible = true) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let started = false;
    let frame;

    const run = () => {
      if (started) return;
      started = true;
      const duration = 1400;
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - (1 - p) ** 3;
        setValue(Math.round(end * eased));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (!startWhenVisible) {
      run();
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, startWhenVisible]);

  return [ref, value];
}
