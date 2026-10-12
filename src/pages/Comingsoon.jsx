import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

export default function ComingSoon({
  variant,
  badgeLabel,
  kicker,
  title,
  quote,
  description,
}) {
  useReveal();

  return (
    <main className={`cs-page cs-${variant}`}>
      <section className="hero cs-hero">
        <div className="cs-bg" aria-hidden="true" />

        <div className="hero-copy cs-hero-copy">
          <span className="cs-badge anim-1">
            <span className="cs-dot" />
            {badgeLabel}
          </span>

          <p className="kicker anim-2">{kicker}</p>

          <h1 className="cs-title anim-2">
            {title}
          </h1>

          <div className="cs-soon anim-3">
            <span className="cs-soon-line" aria-hidden="true" />

            <span className="cs-soon-text">
              Coming Soon
            </span>

            <span className="cs-soon-line" aria-hidden="true" />
          </div>

          <p className="lede cs-quote anim-4">
            {quote}
          </p>

          <p className="cs-desc anim-4">
            {description}
          </p>
        </div>
      </section>

      <section
        className="cs-transition reveal"
        aria-hidden="true"
      >
        <span className="cs-transition-line" />

        <p>
          Something significant is underway at AVODAH &amp; KHEN
        </p>
      </section>
    </main>
  );
}