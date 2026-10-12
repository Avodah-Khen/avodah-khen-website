import { useEffect } from "react";

/* Scroll replay: the "in" class is toggled with visibility, so reveals play when an
   element enters the viewport (from either direction) and reset when it leaves. */
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal, .reveal-stagger");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);
}
