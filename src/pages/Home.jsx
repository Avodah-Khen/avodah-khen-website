import { NavLink } from "../components/router.jsx";
import useReveal from "../hooks/useReveal.js";
import heroImage from "../assets/hero-real-estate.jpg";
import introImage from "../assets/whoweare.jpg";
import proptechImage from "../assets/proptech1.jpg";
import aiImage from "../assets/aidata.jpg";
import executionImage from "../assets/sales-execution.jpg";
import gapImage from "../assets/frag_workflows.jpg";
import {
  FiArrowRight,
  FiHome,
  FiCpu,
  FiBriefcase,
  FiUsers,
  FiTrendingUp,
  FiZap
} from "react-icons/fi";
const pillars = [
  {image: proptechImage, title: "PropTech", text: "Digital products that simplify how property is discovered, marketed and sold." },
  {image: aiImage, title: "AI + Data", text: "Intelligence that helps teams make faster, more informed decisions." },
  {image: executionImage, title: "Execution", text: "Technology combined with real-world sales and property expertise." },
];

const challenges = [
  { number: "01", title: "Fragmented discovery", text: "Buyers navigate disconnected listings and channels." },
  { number: "02", title: "Lead leakage", text: "Enquiries can get lost across teams, spreadsheets and messaging." },
  { number: "03", title: "Limited intelligence", text: "Decisions often lack a single view of demand, pricing and performance." },
  { number: "04", title: "Complex sales", text: "Mandates, channel partners and follow-ups require constant coordination." },
];
const ecosystemCapabilities = [
  {
    number: "01",
    title: "PROPERTY PORTAL",
    action: "Discover",
    text: "Discover properties and explore real estate opportunities.",
    Icon: FiHome,
  },
  {
    number: "02",
    title: "AI + DATA",
    action: "Understand",
    text: "Turn property data into meaningful insights and informed decisions.",
    Icon: FiCpu,
  },
  {
    number: "03",
    title: "MANDATES",
    action: "Represent",
    text: "Structure and represent real estate opportunities.",
    Icon: FiBriefcase,
  },
  {
    number: "04",
    title: "CRM",
    action: "Manage",
    text: "Organize leads, relationships and customer journeys.",
    Icon: FiUsers,
  },
  {
    number: "05",
    title: "SALES",
    action: "Convert",
    text: "Move qualified opportunities through the sales pipeline.",
    Icon: FiTrendingUp,
  },
  {
    number: "06",
    title: "AUTOMATION",
    action: "Optimize",
    text: "Streamline repetitive tasks and connected workflows.",
    Icon: FiZap,
  },
];


const solutions = [
  { number: "01", title: "Property Portal", text: "A digital destination for property discovery, project and inventory exploration, rich profiles and buyer enquiries.", to: "/proptech", link: "Explore PropTech" },
  { number: "02", title: "AI-Powered PropTech", text: "AI recommendations, lead intelligence and automation connected to real estate data and sales workflows.", to: "/proptech", link: "Explore capabilities" },
  { number: "03", title: "Property Mandate Services", text: "Project marketing, qualified lead generation, channel coordination and sales execution for selected properties.", to: "/mandate", link: "Explore mandates" },
  { number: "04", title: "Developer Solutions", text: "Launch strategy, digital marketing, lead generation and sales enablement from launch to sell-through.", to: "/services", link: "Explore solutions" },
  { number: "05", title: "CRM & Sales Automation", text: "Structure enquiries, allocation, follow-ups, site visits, conversion tracking and dashboards in a connected journey.", to: "/proptech", link: "Explore PropTech" },
  { number: "06", title: "Data & Market Intelligence", text: "Bring demand signals, pricing visibility and funnel analytics into clearer business decisions.", to: "/research", link: "Explore insights" },
];


const steps = [
  {
    number: "01",
    title: "Acquire",
    detail: "Mandate / inventory",
    image: proptechImage,
    Icon: FiHome,
  },
  {
    number: "02",
    title: "Position",
    detail: "Strategy + content",
    image: introImage,
    Icon: FiTrendingUp,
  },
  {
    number: "03",
    title: "Generate",
    detail: "Marketing + demand",
    image: aiImage,
    Icon: FiArrowRight,
  },
  {
    number: "04",
    title: "Manage",
    detail: "CRM + channels",
    image: executionImage,
    Icon: FiUsers,
  },
  {
    number: "05",
    title: "Convert",
    detail: "Visits + sales",
    image: heroImage,
    Icon: FiBriefcase,
  },
  {
    number: "06",
    title: "Learn",
    detail: "Data + optimization",
    image: gapImage,
    Icon: FiCpu,
  },
];

const reasons = [
  ["Real-estate first", "Products and workflows designed around property businesses."],
  ["Technology-led", "Modern digital experiences, automation and AI."],
  ["Execution focused", "Technology paired with hands-on sales and mandate capabilities."],
  ["Data connected", "Performance visibility across the customer and sales journey."],
];

export default function Home() {
  useReveal();
  return (
    <div className="av-home">
      
<section className="av-home-hero av-home-hero-reference">
  <div
  className="av-home-hero-image"
  aria-hidden="true"
  style={{ backgroundImage: `url(${heroImage})` }}
/>
  <div className="av-home-hero-shade" aria-hidden="true" />

  <div className="av-home-hero-content hero-enter">
    
<span className="av-reference-badge">
  REAL ESTATE. REIMAGINED WITH PROPTECH
</span>

<h1>
  Technology-driven solutions.
  <br />
  <span className="hero-heading-line">
    Transforming the way{" "}
    <span className="hero-heading-accent">
      real estate moves.
    </span>
  </span>
</h1>


    <p className="av-hero-lede">
      We combine real estate expertise with technology to make buying,
      selling and investing in property simpler, smarter and more
      transparent.
    </p>

    
    <div className="av-actions av-hero-reference-actions">
    <NavLink
      className="av-hero-primary-button"
      to="/contact"
    >
      Talk to our team
    </NavLink>

    <NavLink
      className="av-hero-secondary-button"
      to="/proptech"
    >
      Explore PropTech
    </NavLink>
  </div>

  </div>
</section>

      
      <section
        className="av-connected-ecosystem reveal"
        aria-labelledby="av-connected-ecosystem-title"
      >
        <div className="av-ecosystem-copy">
          <div className="av-section-kicker">
            OUR CONNECTED ECOSYSTEM
          </div>

          <h2 id="av-connected-ecosystem-title">
            One ecosystem,
            <br />
            <em>connected intelligence.</em>
          </h2>

          <span
            className="av-ecosystem-accent"
            aria-hidden="true"
          />

          <p>
            From property discovery to conversion, our connected
            capabilities bring intelligence, relationships and
            execution together.
          </p>

          <NavLink className="av-ecosystem-cta" to="/proptech">
            EXPLORE OUR ECOSYSTEM
            <FiArrowRight aria-hidden="true" />
          </NavLink>
        </div>

        <div className="av-ecosystem-panel">
          <div className="av-ecosystem-panel-heading">
            <span>CORE CAPABILITIES</span>
            <i aria-hidden="true" />
          </div>

          <div className="av-ecosystem-capabilities">
            {ecosystemCapabilities.map(
              ({ number, title, action, text, Icon }) => (
                <article
                  className="av-ecosystem-capability"
                  key={number}
                >
                  <div className="av-ecosystem-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <div className="av-ecosystem-capability-copy">
                    <div className="av-ecosystem-capability-title">
                      <h3>{title}</h3>
                      <span>{action}</span>
                    </div>
                    <p>{text}</p>
                  </div>
                </article>
              )
            )}
          </div>

          <NavLink
            className="av-ecosystem-bottom-link"
            to="/services"
          >
            DISCOVER OUR CAPABILITIES
            <FiArrowRight aria-hidden="true" />
          </NavLink>
        </div>
      </section>
      
<section className="av-section av-process-section reveal">
  <div className="av-process-kicker">
    <span />
    HOW WE WORK
    <span />
  </div>

  <div className="av-process-heading">
    <h2>
      A repeatable model.
      <br />
      <em>Measurable outcomes.</em>
    </h2>
    <p>From property acquisition to data-led optimization.</p>
  </div>

  <div className="av-process-grid reveal-stagger">
    {steps.map(({ number, title, detail, image, Icon }) => (
      <article className="av-process-step stagger-card" key={number}>
        <div className="av-process-image">
          <img src={image} alt="" loading="lazy" />
        </div>

        <div className="av-process-step-copy">
          <span className="av-process-step-label">{title.toUpperCase()}</span>
          <h3>{title}</h3>
          <p>{detail}</p>
          <span className="av-process-step-accent" />
        </div>
      </article>
    ))}
  </div>

  <div className="av-process-footer">
    <span />
    A CONNECTED JOURNEY. LASTING VALUE.
    <span />
  </div>
</section>

      <section className="av-section av-why-section reveal">
        
      <div className="av-why-video">
  <img
    src={introImage}
    alt="Modern architecture representing real estate innovation"
    loading="lazy"
  />
</div>
        <div className="av-why-content"><div className="av-section-kicker">WHY AVODAH</div><h2>Technology grounded in <em>real estate execution.</em></h2><p className="av-why-lede">Built to bridge technology and real estate execution.</p>
          <div className="av-reason-list reveal-stagger">{reasons.map(([title, text], index) => <div className="av-reason stagger-card" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="av-contact-cta reveal">
        <div><div className="av-section-kicker">LET’S CONNECT</div><h2>Let’s build the future<br /><em>of real estate.</em></h2><p>Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.</p></div>
        <div className="av-contact-details"><NavLink className="av-button av-button-dark" to="/contact">Contact AVODAH</NavLink></div>
      </section>
    </div>
  );
}
