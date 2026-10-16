import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { NavLink, useRoute } from "./components/router.jsx";
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import Company from "./pages/Company.jsx";
import Contact from "./pages/Contact.jsx";
import Mandate from "./pages/Mandate.jsx";
import Proptech from "./pages/Proptech.jsx";
import Fintech from "./pages/Fintech.jsx";
import Careers from "./pages/Careers.jsx";
import JobDescription from "./pages/JobDescription.jsx";
import LeasingAndInvestmentAdvisory from "./pages/LeasingAndInvestmentAdvisory.jsx";
import PageTransition from "./motion/PageTransition.jsx";
import Cursor from "./motion/Cursor.jsx";

const pages = {
  "/": Home,
  "/research": Research,
  "/company": Company,
  "/contact": Contact,
  "/mandate": Mandate,
  "/proptech": Proptech,
  "/fintech": Fintech,
  "/careers": Careers,
  "/leasing-investment-advisory": LeasingAndInvestmentAdvisory,
};

const searchIndex = [
  { to: "/research", title: "Heat-ready housing report" },
  { to: "/media", title: "Street Talk podcast" },
  { to: "/company", title: "Leadership team" },
  { to: "/contact", title: "Request a briefing" },
];

export default function App() {
  const path = useRoute();
  const Page =
  path.startsWith("/careers/") && path !== "/careers"
    ? JobDescription
    : pages[path] || Home;
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!search) return undefined;
    const onKey = (e) => { if (e.key === "Escape") { setSearch(false); setQ(""); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [search]);

  const hits = searchIndex.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="site site-premium">
      <Header onSearch={() => setSearch(true)} />

      <PageTransition id="main-content" routeKey={path}>
        <Page />
      </PageTransition>

      <Footer />
      <Cursor />

      {search && (
        <div
          className="search-layer"
          onClick={() => setSearch(false)}
        >
          <div
            className="search-box"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              aria-label="Search services, reports, and people"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services, reports, people..."
            />

            <ul>
              {hits.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.to}
                    onClick={() => {
                      setSearch(false);
                      setQ("");
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}