/* Environment helpers shared by every motion utility. */
const mq = (q) => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia(q) : { matches: false, addEventListener() {}, removeEventListener() {} });

export const reducedMotionQuery = () => mq("(prefers-reduced-motion: reduce)");
export const finePointerQuery = () => mq("(hover: hover) and (pointer: fine)");
export const prefersReducedMotion = () => reducedMotionQuery().matches;
export const hasFinePointer = () => finePointerQuery().matches;
export const isSmallScreen = () => mq("(max-width: 767px)").matches;
