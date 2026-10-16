import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

export default function LeasingAndInvestmentAdvisory() {
  useReveal();

  return (
    <main className="inner li-page">

      {/* HERO */}
      <section className="li-hero">
        <div className="li-hero-content reveal">
          <p className="kicker">Leasing & Investment Advisory</p>

          <h1>
            Strategic real estate decisions,
            <span> backed by market intelligence.</span>
          </h1>

          <p className="li-hero-text">
            We help businesses, investors and property owners make informed
            real estate decisions across leasing, investment and portfolio
            opportunities.
          </p>

          <NavLink to="/contact" className="li-primary-btn">
            Discuss Your Requirement
          </NavLink>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="li-intro">
        <div className="li-section-label reveal">
          <p className="kicker">Strategic Real Estate Advisory</p>
        </div>

        <div className="li-intro-content reveal">
          <h2>
            Making every property decision
            <span> more informed.</span>
          </h2>

          <p>
            Real estate decisions require more than market knowledge. They
            require a clear understanding of location, demand, pricing, asset
            quality, market dynamics and long-term objectives.
          </p>

          <p>
            Our Leasing & Investment Advisory services combine market
            intelligence, transaction expertise and strategic analysis to help
            clients identify the right opportunities and make confident
            decisions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="li-services">
        <div className="li-services-heading reveal">
          <p className="kicker">Our Advisory Services</p>
          <h2>
            Expertise designed around
            <span> your real estate objectives.</span>
          </h2>
        </div>

        <div className="li-service-grid">

          <article className="li-service-card reveal">
            <span className="li-number">01</span>

            <h3>Leasing Advisory</h3>

            <p>
              Helping occupiers and property owners navigate commercial
              leasing opportunities with greater clarity.
            </p>

            <ul>
              <li>Location and market assessment</li>
              <li>Property identification and shortlisting</li>
              <li>Rental benchmarking</li>
              <li>Lease structuring support</li>
              <li>Commercial evaluation</li>
              <li>Negotiation support</li>
              <li>Transaction coordination</li>
            </ul>
          </article>

          <article className="li-service-card reveal">
            <span className="li-number">02</span>

            <h3>Investment Advisory</h3>

            <p>
              Identifying and evaluating real estate opportunities aligned
              with investment objectives.
            </p>

            <ul>
              <li>Market and asset assessment</li>
              <li>Investment opportunity identification</li>
              <li>Location analysis</li>
              <li>Asset evaluation</li>
              <li>Rental and yield assessment</li>
              <li>Risk and opportunity analysis</li>
              <li>Investment decision support</li>
            </ul>
          </article>

          <article className="li-service-card reveal">
            <span className="li-number">03</span>

            <h3>Portfolio Advisory</h3>

            <p>
              Helping clients understand and optimize their existing real
              estate portfolios.
            </p>

            <ul>
              <li>Portfolio assessment</li>
              <li>Asset performance analysis</li>
              <li>Market benchmarking</li>
              <li>Hold / exit evaluation</li>
              <li>Portfolio expansion opportunities</li>
              <li>Strategic repositioning</li>
            </ul>
          </article>

          <article className="li-service-card reveal">
            <span className="li-number">04</span>

            <h3>Market Intelligence</h3>

            <p>
              Turning real estate data into actionable insights.
            </p>

            <ul>
              <li>Market condition analysis</li>
              <li>Emerging location analysis</li>
              <li>Rental trend analysis</li>
              <li>Supply and demand assessment</li>
              <li>Development activity tracking</li>
              <li>Opportunity identification</li>
            </ul>
          </article>

        </div>
      </section>

      {/* APPROACH */}
      <section className="li-approach">
        <div className="li-approach-heading reveal">
          <p className="kicker">Our Approach</p>

          <h2>
            From market insight
            <span> to informed action.</span>
          </h2>
        </div>

        <div className="li-process">

          <div className="li-process-item reveal">
            <span>01</span>
            <div>
              <h3>Understand</h3>
              <p>
                We begin by understanding your business objectives, investment
                goals, location requirements and commercial priorities.
              </p>
            </div>
          </div>

          <div className="li-process-item reveal">
            <span>02</span>
            <div>
              <h3>Analyse</h3>
              <p>
                We evaluate relevant market conditions, properties, pricing,
                demand and potential opportunities.
              </p>
            </div>
          </div>

          <div className="li-process-item reveal">
            <span>03</span>
            <div>
              <h3>Identify</h3>
              <p>
                We shortlist opportunities that align with your requirements
                and strategic objectives.
              </p>
            </div>
          </div>

          <div className="li-process-item reveal">
            <span>04</span>
            <div>
              <h3>Advise</h3>
              <p>
                We provide clear, data-backed recommendations to support
                decision-making.
              </p>
            </div>
          </div>

          <div className="li-process-item reveal">
            <span>05</span>
            <div>
              <h3>Execute</h3>
              <p>
                We support the transaction process through negotiation,
                coordination and closure.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY AVODAH & KHEN */}
      <section className="li-why">
        <div className="li-why-heading reveal">
          <p className="kicker">Why AVODAH & KHEN</p>

          <h2>
            Intelligence that supports
            <span> better real estate decisions.</span>
          </h2>
        </div>

        <div className="li-why-grid">

          <article className="li-why-card reveal">
            <span>01</span>
            <h3>Market Understanding</h3>
            <p>
              Deep understanding of real estate markets, locations and
              emerging opportunities.
            </p>
          </article>

          <article className="li-why-card reveal">
            <span>02</span>
            <h3>Data-Led Analysis</h3>
            <p>
              Market intelligence and structured analysis to support
              commercial decisions.
            </p>
          </article>

          <article className="li-why-card reveal">
            <span>03</span>
            <h3>Strategic Perspective</h3>
            <p>
              We look beyond individual transactions to understand the wider
              business and investment objective.
            </p>
          </article>

          <article className="li-why-card reveal">
            <span>04</span>
            <h3>End-to-End Support</h3>
            <p>
              From identifying an opportunity to supporting negotiations and
              execution.
            </p>
          </article>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="li-clients">
        <div className="li-clients-heading reveal">
          <p className="kicker">Who We Work With</p>

          <h2>
            Advisory built for
            <span> different real estate needs.</span>
          </h2>
        </div>

        <div className="li-client-grid">

          <article className="li-client-card reveal">
            <h3>Businesses & Occupiers</h3>
            <p>
              Finding the right commercial space to support business growth.
            </p>
          </article>

          <article className="li-client-card reveal">
            <h3>Property Owners & Developers</h3>
            <p>
              Improving leasing outcomes and identifying the right occupier
              opportunities.
            </p>
          </article>

          <article className="li-client-card reveal">
            <h3>Investors</h3>
            <p>
              Evaluating opportunities and making informed investment
              decisions.
            </p>
          </article>

          <article className="li-client-card reveal">
            <h3>Institutional & Corporate Clients</h3>
            <p>
              Supporting strategic real estate requirements and portfolio
              decisions.
            </p>
          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="li-cta reveal">
        <p className="kicker">Let's Work Together</p>

        <h2>
          Have a real estate
          <span> decision to make?</span>
        </h2>

        <p>
          Whether you are looking to lease, invest, reposition or expand,
          our advisory team can help you evaluate the opportunity with
          greater clarity.
        </p>

        <NavLink to="/contact" className="li-primary-btn">
          Start a Conversation
        </NavLink>
      </section>

    </main>
  );
}