import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../router.jsx";

/**
 * Minimal architectural line-art used on the Proptech coming-soon page:
 * a faint blueprint grid + a small rising "skyline" of bars.
 */
function ProptechArt() {
  return (
    <svg
      className="cs-art"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g className="cs-gridlines">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 90} x2="600" y2={i * 90} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="600" />
        ))}
      </g>
      <g className="cs-skyline">
        <rect x="92" y="330" width="54" height="220" style={{ animationDelay: "0.15s" }} />
        <rect x="168" y="255" width="54" height="295" style={{ animationDelay: "0.3s" }} />
        <rect x="244" y="380" width="54" height="170" style={{ animationDelay: "0.45s" }} />
        <rect x="320" y="205" width="54" height="345" style={{ animationDelay: "0.6s" }} />
        <rect x="396" y="300" width="54" height="250" style={{ animationDelay: "0.75s" }} />
      </g>
      <g className="cs-float cs-float-a">
        <rect x="440" y="72" width="64" height="64" transform="rotate(20 472 104)" />
      </g>
      <g className="cs-float cs-float-b">
        <circle cx="86" cy="118" r="24" />
      </g>
    </svg>
  );
}

/**
 * Minimal node-network line-art used on the Fintech coming-soon page:
 * connected nodes and a single abstract flow line — deliberately free of
 * any numbers, axes or figures.
 */
function FintechArt() {
  const nodes = [
    [58, 480],
    [214, 358],
    [336, 420],
    [470, 258],
    [534, 150],
    [124, 232],
    [398, 518],
  ];
  return (
    <svg
      className="cs-art"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g className="cs-network-lines">
        <line x1="58" y1="480" x2="214" y2="358" />
        <line x1="214" y1="358" x2="336" y2="420" />
        <line x1="336" y1="420" x2="470" y2="258" />
        <line x1="470" y1="258" x2="534" y2="150" />
        <line x1="214" y1="358" x2="124" y2="232" />
        <line x1="336" y1="420" x2="398" y2="518" />
      </g>
      <path
        className="cs-wave"
        d="M40 486 Q 150 400 214 358 T 336 420 T 470 258 T 534 150"
      />
      {nodes.map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          className="cs-node"
          cx={cx}
          cy={cy}
          r="6"
          style={{ animationDelay: `${i * 0.22}s` }}
        />
      ))}
      <g className="cs-float cs-float-a">
        <rect x="56" y="56" width="56" height="56" transform="rotate(45 84 84)" />
      </g>
      <g className="cs-float cs-float-b">
        <circle cx="518" cy="486" r="20" />
      </g>
    </svg>
  );
}

export default function ComingSoon({
  variant,
  badgeLabel,
  kicker,
  title,
  quote,
  description,
  ctaLabel,
  ctaTo,
}) {
  useReveal();

  return (
    <main className={`cs-page cs-${variant}`}>
      <section className="hero cs-hero">
        <div className="cs-bg" aria-hidden="true" />
        <div className="cs-art-wrap" aria-hidden="true">
          {variant === "proptech" ? <ProptechArt /> : <FintechArt />}
        </div>

        <div className="hero-copy cs-hero-copy">
          <span className="cs-badge anim-1">
            <span className="cs-dot" />
            {badgeLabel}
          </span>

          <p className="kicker anim-2">{kicker}</p>
          <h1 className="cs-title anim-2">{title}</h1>

          <div className="cs-soon anim-3">
            <span className="cs-soon-line" aria-hidden="true" />
            <span className="cs-soon-text">Coming Soon</span>
            <span className="cs-soon-line" aria-hidden="true" />
          </div>

          <p className="lede cs-quote anim-4">{quote}</p>
          <p className="cs-desc anim-4">{description}</p>

          <div className="actions anim-4">
            <NavLink className="btn primary" to={ctaTo}>
              {ctaLabel}
            </NavLink>
          </div>
        </div>
      </section>

      <section className="cs-transition reveal" aria-hidden="true">
        <span className="cs-transition-line" />
        <p>Something significant is underway at AVODAH &amp; KHEN</p>
      </section>
    </main>
  );
}
