
import { NavLink } from "../components/router.jsx";
import useReveal from "../hooks/useReveal.js";
import whoWeAreImage from "../assets/marketintelligence.jpg";
import { useState } from "react";
import propertyPortalImage from "../assets/propertyportal.jpg";
import aiProptechImage from "../assets/ai.jpg";
import mandateServicesImage from "../assets/mandate.jpg";
import developerSolutionsImage from "../assets/developersolution.jpg";
import crmAutomationImage from "../assets/crm.jpg";
import marketIntelligenceImage from "../assets/Market_Intelligence.jpg";
import {
  Search,
  Users,
  ChartNoAxesCombined,
  Workflow,
} from "lucide-react";

const focusAreas = [
  [
    "01",
    "PropTech",
    "Digital products that simplify how property is discovered, marketed and sold.",
  ],
  [
    "02",
    "AI + Data",
    "Intelligence that helps teams make faster, more informed decisions.",
  ],
  [
    "03",
    "Execution",
    "Technology combined with real-world sales and property expertise.",
  ],
];

const gaps = [
  {
    number: "01",
    title: "Fragmented discovery",
    text: "Buyers navigate disconnected listings and channels.",
    icon: Search,
  },
  {
    number: "02",
    title: "Lead leakage",
    text: "Enquiries can get lost across teams, spreadsheets and messaging.",
    icon: Users,
  },
  {
    number: "03",
    title: "Limited intelligence",
    text: "Decisions often lack a single view of demand, pricing and performance.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "04",
    title: "Complex sales",
    text: "Mandates, channel partners and follow-ups require constant coordination.",
    icon: Workflow,
  },
];
const capabilities = [
  {
    image: propertyPortalImage,
    label: "PROPERTY PORTAL",
    title: "Property discovery",
    intro:
      "A modern digital destination for property discovery and qualified enquiries.",
    items: [
      "Smart property search",
      "Project and inventory discovery",
      "Rich property profiles",
      "Buyer enquiry journeys",
      "Location-led discovery",
      "Lead capture and routing",
    ],
  },
  {
    image: aiProptechImage,
    label: "AI-POWERED PROPTECH",
    title: "Intelligence in the workflow",
    intro:
      "Use intelligence to reduce manual work and improve every stage of the property journey.",
    items: [
      "AI recommendations based on preferences, behavior and context",
      "Lead intelligence to prioritize enquiries and surface intent",
      "Automation for follow-ups, reporting and repetitive sales workflows",
    ],
  },
  {
    image: mandateServicesImage,
    label: "PROPERTY MANDATE SERVICES",
    title: "Representation and sales execution",
    intro:
      "End-to-end representation and sales execution for selected projects and properties.",
    items: [
      "Exclusive mandates and project marketing",
      "Lead generation and enquiry routing",
      "Channel management and sales execution",
      "Performance intelligence across enquiries, visits and conversions",
    ],
  },
  {
    image: developerSolutionsImage,
    label: "DEVELOPER SOLUTIONS",
    title: "From launch to sell-through",
    intro:
      "A technology and execution layer for developers from launch to sell-through.",
    items: [
      "Launch strategy and market positioning",
      "Digital marketing around project, location and buyer intent",
      "Lead generation across digital and partner channels",
      "Sales enablement with workflows, data and visibility",
    ],
  },
  {
    image: crmAutomationImage,
    label: "CRM & SALES AUTOMATION",
    title: "A structured sales journey",
    intro:
      "Turn every enquiry into a structured, measurable sales journey.",
    items: [
      "Lead capture and allocation",
      "Follow-ups and next-step visibility",
      "Site visit bookings, outcomes and actions",
      "Conversion funnel monitoring and dashboards",
    ],
  },
  {
    image: marketIntelligenceImage,
    label: "DATA & MARKET INTELLIGENCE",
    title: "Actionable business visibility",
    intro:
      "Turn property and customer data into actionable business visibility.",
    items: [
      "Demand signals: understand what buyers are searching for",
      "Pricing visibility: compare market context and project positioning",
      "Funnel analytics: see where demand converts or drops",
    ],
  },
];

const operatingSteps = [
  ["01", "Acquire", "Mandate / inventory"],
  ["02", "Position", "Strategy + content"],
  ["03", "Generate", "Marketing + demand"],
  ["04", "Manage", "CRM + channels"],
  ["05", "Convert", "Visits + sales"],
  ["06", "Learn", "Data + optimization"],
];

const distinctions = [
  [
    "Real-estate first",
    "Products and workflows designed around property businesses.",
  ],
  [
    "Technology-led",
    "Modern digital experiences, automation and AI.",
  ],
  [
    "Execution focused",
    "Technology is paired with hands-on sales and mandate capabilities.",
  ],
  [
    "Data connected",
    "Performance can be measured across the customer and sales journey.",
  ],
];
export default function Company() {
  useReveal();

  const [expandedCapabilities, setExpandedCapabilities] = useState([]);

  const toggleCapability = (label) => {
    setExpandedCapabilities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  };

  return (
    <main className="av-company">
      {/* HERO */}
      <section className="av-company-hero">
        <div className="av-company-hero-image" aria-hidden="true" />

        <div className="av-company-hero-content hero-enter">
          <p className="av-eyebrow av-eyebrow-light">
            AVODAH &amp; KHEN
          </p>

          <h1>
            Real Estate.
            <br />
            Technology.
            <br />
            <em>Intelligence.</em>
          </h1>

          <p>
            A connected platform for property discovery, mandates,
            sales, CRM, data and AI-powered real estate.
          </p>

          <NavLink className="av-button av-button-copper" to="/contact">
            Connect with us <span aria-hidden="true">↗</span>
          </NavLink>
        </div>

        <div className="av-company-hero-tag">
          PROPERTY • TECHNOLOGY • GROWTH
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="av-company-section av-company-overview reveal">
        <div className="av-company-label">WHO WE ARE</div>

        <div className="av-company-overview-layout">
          <div className="av-company-overview-content">
            <h2>
              A technology-led real estate company built around{" "}
              <em>one connected ecosystem.</em>
            </h2>

            <div className="av-company-overview-pillars">
              <div className="av-company-pillar">
                <span aria-hidden="true">⌂</span>
                <strong>
                  PROPERTY
                  <br />
                  DISCOVERY
                </strong>
              </div>

              <div className="av-company-pillar">
                <span aria-hidden="true">◎</span>
                <strong>
                  AI &amp;
                  <br />
                  DATA
                </strong>
              </div>

              <div className="av-company-pillar">
                <span aria-hidden="true">♧</span>
                <strong>
                  MANDATES &amp;
                  <br />
                  SALES EXECUTION
                </strong>
              </div>

              <div className="av-company-pillar">
                <span aria-hidden="true">▥</span>
                <strong>
                  CRM &amp;
                  <br />
                  INTELLIGENCE
                </strong>
              </div>
            </div>

            <p className="av-company-overview-description">
              We bring together property, technology, sales and data to
              create a seamless experience for developers, brokers and
              buyers — all in one platform.
            </p>
          </div>

          <div className="av-company-overview-image">
            <img
              src={whoWeAreImage}
              alt="Connected real estate ecosystem integrating technology, AI, sales and CRM"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* THE REAL ESTATE GAP */}
      <section className="av-company-gap reveal">
        <div className="av-company-gap-layout">
          <div className="av-company-gap-intro">
            <div className="av-company-label">
              THE REAL ESTATE GAP
            </div>

            <h2>
              The Real
              <br />
              Estate Gap
            </h2>

            <div className="av-company-gap-rule" />

            <p className="av-company-gap-tagline">
              High-Value Assets.
              <br />
              <em>Fragmented Workflows.</em>
            </p>

            <p className="av-company-gap-caption">
              Four challenges. One connected opportunity.
            </p>
          </div>

          <div className="av-company-gap-grid reveal-stagger">
            {gaps.map((gap) => {
              const GapIcon = gap.icon;

              return (
                <article
                  className="av-company-gap-card stagger-card"
                  key={gap.number}
                >
                  
<div className="av-company-gap-card-top">
  <div className="av-company-gap-icon">
    <GapIcon
      size={30}
      strokeWidth={1.5}
      aria-hidden="true"
    />
  </div>

  <h3>{gap.title}</h3>
</div>

<p>{gap.text}</p>


                  <div className="av-company-gap-card-rule" />
                </article>
              );
            })}
          </div>
        </div>

        <div className="av-company-gap-opportunity">
          <div>
            <span>THE OPPORTUNITY</span>
            <h3>One connected real estate ecosystem.</h3>
          </div>

          <div className="av-company-gap-services">
            <span>Property Discovery</span>
            <i aria-hidden="true">•</i>
            <span>AI + Data</span>
            <i aria-hidden="true">•</i>
            <span>CRM</span>
            <i aria-hidden="true">•</i>
            <span>Sales Execution</span>
          </div>
        </div>
      </section>
      
      {/* CAPABILITIES */}
      <section className="av-company-section av-company-capabilities reveal">
        <div className="av-company-label">WHAT WE DO</div>

        <div className="av-company-section-heading">
          <h2>
            Capabilities across
            <br />
            <em>the property lifecycle.</em>
          </h2>

          <p>
            A connected set of services and digital capabilities for
            property discovery, marketing, sales and business intelligence.
          </p>
        </div>

        <div className="av-company-capability-grid reveal-stagger">
          {capabilities.map((capability) => {
            const isExpanded = expandedCapabilities.includes(
              capability.label
            );

            return (
              <article
                className="av-company-capability-card stagger-card"
                key={capability.label}
              >
                <div className="av-company-capability-image">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    loading="lazy"
                  />
                </div>

                <p className="av-company-capability-label">
                  {capability.label}
                </p>

                <h3>{capability.title}</h3>

                <p>{capability.intro}</p>

                {isExpanded && (
                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  className="av-company-capability-toggle"
                  aria-expanded={isExpanded}
                  onClick={() => toggleCapability(capability.label)}
                >
                  {isExpanded ? "Show less" : "Show more"}
                  <span aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* VISION */}
      <section className="av-company-section av-company-vision reveal">
        <div className="av-company-label">OUR VISION</div>

        <h2>
          A more connected,
          <br />
          intelligent <em>real estate future.</em>
        </h2>

        <p>
          We aim to bring property discovery, market intelligence,
          customer relationships and sales execution closer together
          through thoughtful technology and practical execution.
        </p>
      </section>

      {/* CONTACT CTA */}
      <section className="av-company-cta reveal">
        <div>
          <p className="av-company-label">LET'S BUILD WHAT'S NEXT</p>
          <h2>
            Have a property opportunity
            <br />
            <em>to explore together?</em>
          </h2>
        </div>

        <NavLink className="av-button av-button-copper" to="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </NavLink>
      </section>
    </main>
  );
}