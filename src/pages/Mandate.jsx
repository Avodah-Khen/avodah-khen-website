
import React from "react";

import {
  FiLayers,
  FiDollarSign,
  FiPackage,
  FiBarChart2,
  FiShield,
  FiTrendingUp,
  FiHome,
  FiCalendar,
  FiBriefcase,
  FiRefreshCw,
  FiMapPin,
  FiTarget,
  FiUsers,
  FiMonitor,
} from "react-icons/fi";

import useReveal from "../hooks/useReveal.js";

import salesObjectivesImage from "../assets/sales-objectives.jpg";
import mandateAgreementImage from "../assets/mandate-agreement.jpg";
import salesKpiImage from "../assets/sales-kpi.jpg";
import salesExecutionImage from "../assets/sales-execution.jpg";
import soleSellingImage from "../assets/sale-partner-meeting.jpg";

const steps = [
  {
    image: salesObjectivesImage,
    title:
      "Define Your Sales Objectives as Your Sole Selling Partner",
    intro:
      "Get clarity on branding objectives, sales targets and achieving the best possible rates. We begin by understanding:",
    items: [
      "Target buyer segment",
      "Total inventory size",
      "Target revenue",
      "Funding and cash-flow requirements",
      "Launch timeline",
      "Sales cycle expectations",
    ],
  },
  {
    image: mandateAgreementImage,
    title: "Negotiate the Mandate Agreement",
    intro:
      "We ensure that our agreement with the developer clearly defines:",
    items: [
      "Revenue targets",
      "Commission structure",
      "Exclusive clause",
      "Marketing responsibilities under brand mandates",
      "Duration",
      "Reporting frequency",
      "Exit clause",
    ],
    notes: [
      "Legal clarity ensures smooth execution of the sales mandate.",
    ],
  },
  {
    image: salesKpiImage,
    title: "Set Performance KPIs (Key Performance Indicators)",
    intro: "We define measurable KPIs such as:",
    items: [
      "Site visit targets",
      "Monthly booking targets",
      "Channel partner activation numbers",
      "Conversion ratios",
      "Inventory absorption rate",
      "Revenue milestone tracking",
    ],
  },
  {
    image: salesExecutionImage,
    title: "Coordinate Sales Execution",
    intro: "For maximum impact, we ensure that:",
    items: [
      "Digital marketing supports on-ground sales",
      "Branding remains unified",
      "Messaging stays consistent",
      "CRM tracking remains active",
      "Campaigns align with pricing",
    ],
    notes: [
      "Fragmented marketing can weaken mandate effectiveness.",
    ],
  },
];

const benefits = [
  { title: "Unified Brand Positioning", Icon: FiLayers },
  { title: "Strong Pricing Discipline", Icon: FiDollarSign },
  { title: "Structured Inventory Release", Icon: FiPackage },
  { title: "Data-driven Execution", Icon: FiBarChart2 },
  { title: "Single-point Accountability", Icon: FiShield },
  { title: "Faster Inventory Absorption", Icon: FiTrendingUp },
];

const whenToAppoint = [
  {
    title: "New Project Launch",
    description:
      "Establish a clear sales strategy, pricing structure and market positioning from day one.",
    Icon: FiHome,
  },
  {
    title: "Pre-launch Planning",
    description:
      "Prepare your project for launch with structured planning and coordinated sales activities.",
    Icon: FiCalendar,
  },
  {
    title: "Large Township Developments",
    description:
      "Coordinate large inventories, channel partners and sales execution through one structured model.",
    Icon: FiBriefcase,
  },
  {
    title: "Redevelopment Projects",
    description:
      "Bring clarity, accountability and a defined sales approach to complex redevelopment projects.",
    Icon: FiRefreshCw,
  },
  {
    title: "Slow-moving Inventory",
    description:
      "Identify sales bottlenecks and strengthen pricing, marketing and conversion strategies.",
    Icon: FiBarChart2,
  },
  {
    title: "Expansion into Mumbai Markets",
    description:
      "Build a market-focused sales strategy to support expansion across Mumbai.",
    Icon: FiMapPin,
  },
];


const support = [
  {
    category: "MARKET INTELLIGENCE",
    title: "Market Expertise Across Mumbai",
    description:
      "Local market understanding to help position projects for the right audience.",
    Icon: FiHome,
  },
  {
    category: "BRAND STRATEGY",
    title: "Strategic Brand-Mandate Implementation",
    description:
      "Consistent project positioning, communication and coordinated execution.",
    Icon: FiTarget,
  },
  {
    category: "SALES MANAGEMENT",
    title: "End-to-End Exclusive Sales Mandates",
    description:
      "A structured approach to managing the project sales lifecycle.",
    Icon: FiTrendingUp,
  },
  {
    category: "CHANNEL PARTNERS",
    title: "Broker Ecosystem Management",
    description:
      "Organised broker coordination to support reach and sales conversion.",
    Icon: FiUsers,
  },
  {
    category: "ON-GROUND EXECUTION",
    title: "On-Site Sales Deployment",
    description:
      "Dedicated project-level sales support and coordinated execution.",
    Icon: FiBriefcase,
  },
  {
    category: "TECHNOLOGY & INSIGHTS",
    title: "CRM-Driven Reporting",
    description:
      "Structured lead tracking, transparent reporting and sales visibility.",
    Icon: FiMonitor,
  },
];


function Mandate() {
  useReveal();

  return (
    <main className="mandate-page">
      {/* HERO */}
      <section className="mandate-hero">
        <div className="mandate-container">
          <span className="mandate-eyebrow anim-1">
            AVODAH &amp; KHEN
          </span>

          <h1 className="anim-2">
            Why Should You Appoint Us As Your Sole Selling Partner
            <span> for Your Project</span>
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mandate-section mandate-intro-section">
        <div className="mandate-container">
          <div className="mandate-intro mandate-intro-split reveal">
            <div className="mandate-intro-content">
              <span className="mandate-label">
                SOLE SELLING PARTNER
              </span>

              <h3>Step-By-Step Guide For Developers In India</h3>

              <p>
                Launching a real estate project is a major financial
                decision. Choosing the right Sole Selling Partner under
                structured sales mandates and brand mandates can directly
                impact your revenue, pricing discipline, and inventory
                absorption.
              </p>

              <p>
                At Avodah &amp; Khen, backed by 20+ years of experience
                in sales &amp; brand mandates, we support developers
                across Mumbai with structured exclusive mandate models.
              </p>
            </div>

            <div className="mandate-intro-image">
              <img
                src={soleSellingImage}
                alt="Real estate professionals discussing a residential project"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING THE MODEL */}
      <section className="mandate-section mandate-light">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">
              UNDERSTANDING THE MODEL
            </span>

            <h3>What is a Sole Selling Partner?</h3>
          </div>

          <div className="mandate-definition reveal">
            <p>
              A Sole Selling Partner is appointed under an exclusive sales
              mandate agreement to manage the complete sales lifecycle of
              a project.
            </p>

            <h3>Our Sole Selling Model Ensures:</h3>

            <ul>
              <li>Centralized pricing strategy</li>
              <li>Structured inventory allocation</li>
              <li>A well-established and controlled broker network</li>
              <li>Transparent reporting</li>
              <li>Clear accountability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP GUIDE */}
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">
              STEP-BY-STEP GUIDE
            </span>

            <h3>
              While Appointing Us As Your Sole Selling Partner, You Need
              To...
            </h3>
          </div>

          <div className="mandate-steps">
            {steps.map((step, index) => (
              <article
                className="mandate-step mandate-step-with-image reveal"
                key={step.title}
              >
                <div className="mandate-step-image">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                  />
                </div>

                <div className="mandate-step-content">
                  <h3>{step.title}</h3>

                  {step.intro && <p>{step.intro}</p>}

                  <ul>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {step.notes && (
                    <div className="mandate-notes">
                      {step.notes.map((note) => (
                        <p key={note}>
                          <strong>Note: </strong>
                          {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="mandate-section mandate-dark">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">KEY BENEFITS</span>

            <h3>
              Benefits of Appointing Avodah &amp; Khen a Sole Selling
              Partner
            </h3>
          </div>

          <div className="mandate-grid">
            {benefits.map(({ title, Icon }) => (
              <div className="mandate-card reveal" key={title}>
                <span className="mandate-benefit-icon">
                  <Icon aria-hidden="true" />
                </span>

                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMING - PREMIUM CARDS */}
      <section className="mandate-section mandate-light mandate-timing">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">THE RIGHT MOMENT</span>

            <h3>
              When Should You Appoint Avodah &amp; Khen As Your Sole
              Selling Partner?
            </h3>

            <p className="mandate-timing-intro">
              The right sales strategy, introduced at the right stage,
              can make a meaningful difference to your project.
            </p>
          </div>

          <div className="mandate-timing-grid">
            {whenToAppoint.map(({ title, description, Icon }) => (
              <article
                className="mandate-timing-card reveal"
                key={title}
              >
                <div className="mandate-timing-icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <span
                  className="mandate-timing-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SALES STRUCTURE COMPARISON */}
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">SALES STRUCTURE</span>

            <h3>
              Sole Selling Partner vs Multiple Channel Partners
            </h3>
          </div>

          <div className="mandate-comparison">
            <div className="comparison-column reveal">
              <h3>
                Why Should You Appoint a Single Sole Selling Partner?
              </h3>

              <ul>
                <li>Strong pricing control</li>
                <li>Unified brand messaging</li>
                <li>Clear accountability</li>
                <li>Structured inventory allocation</li>
                <li>Centralized reporting</li>
              </ul>
            </div>

            <div className="comparison-column reveal">
              <h3>
                Why Should You Avoid Appointing Multiple Channel Partners?
              </h3>

              <ul>
                <li>Pricing inconsistency</li>
                <li>Fragmented brand communication</li>
                <li>Confused accountability</li>
                <li>Inventory conflicts</li>
                <li>Scattered reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
{/* SUPPORT FOR DEVELOPERS */}
<section className="mandate-section mandate-support-premium">
  <div className="mandate-container">
    <div className="mandate-support-header reveal">
      <span className="mandate-label">AVODAH &amp; KHEN</span>

      <h3>
        Sales Expertise.
        <span> Delivered Strategically.</span>
      </h3>

      <p>
        How we support developers through market intelligence,
        brand mandates and structured sales execution.
      </p>
    </div>

    <div className="mandate-support-grid">
      {support.map(({ category, title, description, Icon }) => (
        <article className="mandate-support-item reveal" key={title}>
          <div className="mandate-support-icon">
            <Icon aria-hidden="true" />
          </div>

          <div className="mandate-support-copy">
            <span className="mandate-support-category">{category}</span>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>

          <span className="mandate-support-arrow" aria-hidden="true">
            ↗
          </span>
        </article>
      ))}
    </div>

    <div className="mandate-support-footer">
      <span>MARKET KNOWLEDGE</span>
      <span className="mandate-support-footer-arrow">→</span>
      <span>SALES EXECUTION</span>
    </div>
  </div>
</section>


      
{/* OUR STRENGTH */}
<section className="mandate-section mandate-pride-premium">
  <div className="mandate-container">
    <div className="mandate-pride-header reveal">
      <div className="mandate-pride-heading">
        <span className="mandate-label">OUR STRENGTH</span>

        <h3>
          We Pride Ourselves <span>With...</span>
        </h3>
      </div>

      <p>
        Our approach is built around experience, accountability,
        structured execution and a deep understanding of the real
        estate sales ecosystem.
      </p>
    </div>

    <div className="mandate-pride-premium-grid">
      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">01</span>
        <div className="mandate-pride-icon">
          <FiShield aria-hidden="true" />
        </div>
        <h4>Proven Sales Expertise</h4>
        <p>
          Exclusive sales mandate and brand-mandate experience
          built around structured execution.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>

      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">02</span>
        <div className="mandate-pride-icon">
          <FiMapPin aria-hidden="true" />
        </div>
        <h4>Mumbai Market Knowledge</h4>
        <p>
          Local market understanding to help developers position
          their projects more effectively.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>

      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">03</span>
        <div className="mandate-pride-icon">
          <FiUsers aria-hidden="true" />
        </div>
        <h4>Dedicated Sales Teams</h4>
        <p>
          On-ground sales deployment focused on coordination,
          buyer engagement and execution.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>

      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">04</span>
        <div className="mandate-pride-icon">
          <FiMonitor aria-hidden="true" />
        </div>
        <h4>CRM &amp; Reporting Systems</h4>
        <p>
          Organised lead tracking and reporting for improved
          visibility across the sales process.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>

      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">05</span>
        <div className="mandate-pride-icon">
          <FiBriefcase aria-hidden="true" />
        </div>
        <h4>Strong Broker Network</h4>
        <p>
          Broker relationships and channel coordination to
          support project reach and sales opportunities.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>

      <article className="mandate-pride-premium-card reveal">
        <span className="mandate-pride-number">06</span>
        <div className="mandate-pride-icon">
          <FiHome aria-hidden="true" />
        </div>
        <h4>Developer Relationships</h4>
        <p>
          A relationship-led approach to working with developers
          and supporting their sales objectives.
        </p>
        <span className="mandate-pride-arrow" aria-hidden="true">↗</span>
      </article>
    </div>

    <div className="mandate-pride-footer">
      <span>EXPERIENCE</span>
      <span className="mandate-pride-footer-arrow">→</span>
      <span>EXECUTION</span>
      <span className="mandate-pride-footer-arrow">→</span>
      <span>RESULTS</span>
    </div>
  </div>
</section>

{/* FINAL TAKEAWAY */}
<section className="mandate-closing">
  <div className="mandate-container">
    <div className="mandate-closing-top">
      <div className="mandate-closing-content reveal">
        <span className="mandate-label">FINAL TAKEAWAY</span>

        <h3>
          Not Just Sales.
          <span> A Structured Growth System.</span>
        </h3>

        <p className="mandate-closing-description">
          Appointing a Sole Selling Partner is not outsourcing sales.
          It is building a structured, accountable and revenue-driven
          sales system backed by professional sales mandates and
          brand mandates.
        </p>

        <span className="mandate-closing-subtitle">IF YOU WANT TO</span>

        <div className="mandate-closing-benefits">
          <div>
            <FiTrendingUp aria-hidden="true" />
            <span>Launch stronger</span>
          </div>

          <div>
            <FiDollarSign aria-hidden="true" />
            <span>Sell faster</span>
          </div>

          <div>
            <FiTarget aria-hidden="true" />
            <span>Maintain pricing discipline</span>
          </div>

          <div>
            <FiShield aria-hidden="true" />
            <span>Avoid broker conflicts</span>
          </div>
        </div>
      </div>
    </div>

    {/* CONTACT CTA */}
    <div className="mandate-closing-cta">
      <div className="mandate-closing-cta-main reveal">
        <span className="mandate-label">
          LET'S BUILD YOUR SALES STRATEGY
        </span>

        <h3>
          Ready to appoint us as your
          <span> Sole Selling Partner?</span>
        </h3>

        <p>
          Partner with AVODAH &amp; KHEN to bring structure,
          accountability and strategic direction to your project sales.
        </p>

        <a
          href="/contact"
          className="mandate-closing-button"
        >
          Contact Us Now
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="mandate-closing-cta-details reveal">
        <div className="mandate-closing-question">
          <FiHome aria-hidden="true" />
          <p>Planning a new project launch?</p>
        </div>

        <div className="mandate-closing-question">
          <FiMapPin aria-hidden="true" />
          <p>Looking for structured sales execution in Mumbai?</p>
        </div>

        <div className="mandate-closing-note">
          Connect with <strong>AVODAH &amp; KHEN</strong> to discuss
          your project and explore an exclusive sales mandate and
          brand-mandate approach.
        </div>
      </div>
    </div>

    <div className="mandate-closing-footer">
      <span>YOUR PROJECT</span>
      <span>→</span>
      <span>OUR COMMITMENT</span>
      <span>→</span>
      <span>LONG-TERM VALUE</span>
    </div>
  </div>
</section>


      
    </main>
  );
}

export default Mandate;
