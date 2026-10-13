
import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".reveal, .reveal-stagger"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      items.forEach((item) => item.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "in",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}
