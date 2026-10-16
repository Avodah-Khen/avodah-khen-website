import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./env.js";

/* Returns [ref, inView]. inView follows the element in BOTH directions:
   true while it is in the viewport, false when it leaves, true again on re-entry,
   so scroll animations replay when scrolling down or back up.
   Reduced motion => always true (content never hidden). */
export default function useInView({ threshold = 0, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
