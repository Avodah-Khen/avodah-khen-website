import { Children, cloneElement, isValidElement } from "react";
import useInView from "./useInView.js";

/* PremiumReveal: opacity + translate + blur, once, when scrolled into view.
   variant: "up" | "fade" | "scale" | "left" | "line" */
export function PremiumReveal({ as: Tag = "div", variant = "up", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      data-pr={variant}
      className={`pr ${inView ? "pr-in" : ""} ${className}`.trim()}
      style={{ "--pr-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* StaggerGrid: children enter one after another (default 80ms steps). */
export function StaggerGrid({ as: Tag = "div", step = 80, variant = "up", className = "", children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  let i = 0;
  const kids = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const idx = i++;
    return cloneElement(child, {
      "data-pr": variant,
      className: `${child.props.className || ""} pr`.trim(),
      style: { ...(child.props.style || {}), "--pr-delay": `${idx * step}ms` },
    });
  });
  return (
    <Tag ref={ref} className={`pr-stagger ${inView ? "pr-in" : ""} ${className}`.trim()} {...rest}>
      {kids}
    </Tag>
  );
}

export default PremiumReveal;
