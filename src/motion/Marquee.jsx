/* AnimatedMarquee: seamless CSS loop. Decorative => aria-hidden. Static under reduced motion.
   variant: "line" (small caps strip) | "display" (large outlined type on dark). */
export default function Marquee({ items, speed = 48, reverse = false, variant = "line", className = "" }) {
  const row = (key, hidden) => (
    <ul className="mq-row" key={key} aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}><span>{t}</span><i aria-hidden="true" /></li>
      ))}
    </ul>
  );
  return (
    <div className={`mq mq-${variant}${reverse ? " mq-reverse" : ""} ${className}`.trim()} aria-hidden="true" style={{ "--mq-speed": `${speed}s` }}>
      <div className="mq-track">{row("a")}{row("b", true)}</div>
    </div>
  );
}
