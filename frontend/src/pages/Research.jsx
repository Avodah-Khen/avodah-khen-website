import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

import {
  FiMapPin,
  FiTrendingUp,
  FiLayers,
  FiUsers,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

const analyses = [
  {
    icon: FiMapPin,
    title: "Location Intelligence",
    text: "Understand micro-markets through pricing, infrastructure, connectivity, development activity and growth indicators.",
  },
  {
    icon: FiTrendingUp,
    title: "Market & Price Trends",
    text: "Track property prices, inventory, absorption, rental trends and changing market conditions.",
  },
  {
    icon: FiLayers,
    title: "Project & Competitor Intelligence",
    text: "Analyse competing projects, configurations, pricing, amenities, offers, positioning and sales strategies.",
  },
  {
    icon: FiUsers,
    title: "Buyer & Demand Insights",
    text: "Identify buyer preferences, budgets, property requirements and emerging demand patterns.",
  },
  {
    icon: FiTarget,
    title: "Project Positioning",
    text: "Use market intelligence to identify opportunities for pricing, product configuration, positioning and go-to-market strategy.",
  },
  {
    icon: FiBarChart2,
    title: "Opportunity Identification",
    text: "Discover emerging markets, high-potential locations and opportunities that may otherwise remain hidden within large volumes of property data.",
  },
];


const decisions = [
  {
    icon: FiMapPin,
    title: "Acquisition",
    text: "Evaluate locations, market potential and property opportunities.",
  },
  {
    icon: FiLayers,
    title: "Development",
    text: "Understand project potential, demand and product requirements.",
  },
  {
    icon: FiTrendingUp,
    title: "Pricing",
    text: "Compare market rates, competition and pricing trends.",
  },
  {
    icon: FiUsers,
    title: "Sales",
    text: "Understand buyer demand and sales opportunities.",
  },
  {
    icon: FiTarget,
    title: "Marketing",
    text: "Refine project positioning and target audiences.",
  },
  {
    icon: FiBarChart2,
    title: "Investment",
    text: "Assess market opportunities and potential risks.",
  },
];


const approach = [
  "COLLECT",
  "ANALYSE",
  "COMPARE",
  "IDENTIFY",
  "ACT",
];

export default function Research() {
  useReveal();

  return (
    <main className="inner research-page">

      {/* ================= HERO ================= */}
      <header className="research-hero">
        <div className="research-hero-image" />

        <div className="research-hero-content">
          <p className="kicker anim-1">
            RESEARCH &amp; INSIGHTS
          </p>

          <h1 className="anim-2">
            Know the Market.
            <br />
            See the Opportunity.
            <br />
            Make Better Decisions.
          </h1>

          <p className="lede anim-3">
            Real estate decisions are driven by data—but meaningful insights
            come from understanding what the data is telling you.
          </p>
        </div>
      </header>
      
      {/* ================= INTRODUCTION ================= */}
      <section className="research-section research-intro-section">
        <div className="research-intro-layout">

          <div className="research-intro reveal">
            <span className="research-label">
              REAL ESTATE MARKET RESEARCH
            </span>

            <h2>
              Turning Property Data Into Meaningful Market Intelligence
            </h2>

            <p>
              Our Real Estate Market Research combines technology, property
              intelligence and on-ground market understanding to provide a
              clearer view of locations, projects, pricing, competition and
              buyer demand.
            </p>

            <p>
              We help developers, investors and real estate businesses move
              beyond assumptions and make data-informed decisions with greater
              confidence.
            </p>
          </div>

          <div className="research-intro-visual reveal">
            <img
              src="/images/market-research.jpg"
              alt="Modern real estate development and market research"
              loading="lazy"
            />
          </div>

        </div>
      </section>


      {/* ================= WHAT WE ANALYSE ================= */}
      <section className="research-section research-light">

        <div className="research-heading reveal">
          <span className="research-label">
            WHAT WE ANALYSE
          </span>

          <h2>What We Analyse</h2>
        </div>
        
<div className="research-grid">
  {analyses.map((item, index) => {
    const Icon = item.icon;

    return (
      <article
        className={`research-card reveal research-card-${index + 1}`}
        key={item.title}
      >
        <div className="research-card-heading">
          <div className="research-icon">
            <Icon aria-hidden="true" />
          </div>

          <h3>{item.title}</h3>
        </div>

        <p>{item.text}</p>
      </article>
    );
  })}
</div>

      </section>
      
      {/* ================= MARKET INTELLIGENCE ================= */}
      <section className="research-section research-intelligence-section">

        <div className="research-intelligence-layout">

          <div className="research-intelligence reveal">
            <span className="research-label">
              MARKET INTELLIGENCE
            </span>

            <h2>
              From Property Data to Market Intelligence
            </h2>

            <p>
              We bring together technology, data and real estate expertise
              to turn complex market information into insights that support
              better decisions.
            </p>

            <p>
              From evaluating opportunities to refining pricing and sales
              strategies, our research helps businesses move forward with
              greater clarity.
            </p>
          </div>

          <div className="research-intelligence-visual reveal">
            <img
              src="/images/market-intelligence.jpg"
              alt="Real estate market intelligence and property analysis"
              loading="lazy"
            />
          </div>

        </div>

        <div className="research-decision-grid">
          {decisions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="research-decision-card reveal"
                key={item.title}
              >
                <div className="research-decision-card-icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

      </section>


      {/* ================= OUR APPROACH ================= */}
      <section className="research-section research-dark">

        <div className="research-heading reveal">

          <span className="research-label">
            OUR APPROACH
          </span>

          <h2>Our Approach</h2>

        </div>

        <div className="research-process">

          {approach.map((item, index) => (
            <div
              className="research-process-item reveal"
              key={item}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item}</h3>

              {index < approach.length - 1 && (
                <strong>→</strong>
              )}

            </div>
          ))}

        </div>

        <div className="research-conclusion reveal">

          <p>
            Because in real estate, better information can lead to better
            decisions.
          </p>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="research-cta reveal">

        <span className="research-label">
          RESEARCH &amp; INSIGHTS
        </span>

        <h2>
          Make Better Real Estate Decisions With Better Information.
        </h2>

        <p>
          Get a clearer understanding of the market, competition,
          pricing and emerging opportunities.
        </p>

        <NavLink to="/contact" className="btn primary">
          Talk to Our Team
        </NavLink>

      </section>

    </main>
  );
}