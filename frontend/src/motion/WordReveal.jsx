import { Children, cloneElement, isValidElement } from "react";
import useInView from "./useInView.js";

/* Splits string children into masked word spans. Text stays real text inside the
   heading (spaces preserved as text nodes) so screen readers read it normally. */
function split(node, counter, step) {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, k) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) return part;
      const delay = counter.n++ * step;
      return (
        <span className="wr-mask" key={`${counter.n}-${k}`}>
          <span className="wr-word" style={{ "--wr-delay": `${delay}ms` }}>{part}</span>
        </span>
      );
    });
  }
  if (isValidElement(node)) {
    if (node.type === "br") return node;
    return cloneElement(node, { key: node.key }, ...Children.toArray(node.props.children).map((c) => split(c, counter, step)));
  }
  return node;
}

/* WordReveal: <WordReveal as="h1" delay={120}>Text <em>emphasis</em></WordReveal>
   trigger: "mount" (heroes) or "view" (section headings). */
export default function WordReveal({ as: Tag = "h2", trigger = "view", delay = 0, step = 55, className = "", children, ...rest }) {
  const [ref, inView] = useInView({ rootMargin: "0px 0px -12% 0px" });
  const on = trigger === "mount" ? true : inView;
  const counter = { n: 0 };
  const content = Children.toArray(children).map((c) => split(c, counter, step));
  return (
    <Tag ref={ref} className={`wr ${on ? "wr-in" : ""} ${className}`.trim()} style={{ "--wr-base": `${delay}ms` }} {...rest}>
      {content}
    </Tag>
  );
}
