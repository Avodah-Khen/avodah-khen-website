import { useEffect, useState } from "react";
import { NavLink, getPath } from "./router.jsx";
import logo from "../assets/avodah-khen-logo.png";

const menus = {
  services: [
    { to: "/mandate", label: "Mandate" },
    { to: "/proptech", label: "Proptech" },
    { to: "/fintech", label: "Fintech" },
    {
      to: "/leasing-investment-advisory",
      label: "Leasing and Investment Advisory"
    }
  ],

  company: [
    { to: "/company", label: "Who we are" },
    { to: "/company", label: "Leadership" },
    { to: "/careers", label: "Careers" },
  ],

  research: [],
};

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setActiveMenu(null);
      setActiveItem(null);
      setPath(getPath());
    };

    window.addEventListener("hashchange", close);

    return () => {
      window.removeEventListener("hashchange", close);
    };
  }, []);

  /* compact sticky state (rAF-free: a single passive listener toggling one boolean) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Escape closes the dropdown / mobile menu */
  useEffect(() => {
    if (!open && !activeMenu) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, activeMenu]);

  const isCurrent = (key) => {
    if (key === "company") return path === "/company" || path.startsWith("/careers");
    if (key === "services") return menus.services.some((i) => i.to === path);
    return path === `/${key}`;
  };

  const handleMenuClick = (key, e) => {
    const items = menus[key];

    // Research has no dropdown, so let it navigate normally
    if (items.length === 0) {
      setActiveMenu(null);
      setActiveItem(null);
      setOpen(false);
      return;
    }

    // Other menu items open/close dropdown
    e.preventDefault();

    setActiveItem(null);

    setActiveMenu((current) =>
      current === key ? null : key
    );
  };

  return (
    <header className={`topbar nav-animated${scrolled ? " is-scrolled" : ""}${path === "/" ? " topbar-over" : ""}${path === "/" && !scrolled && !open ? " is-hero" : ""}`}>

      {/* Logo */}
      <NavLink className="logo" to="/">
        <img
          src={logo}
          alt="AVODAH & KHEN"
          className="company-logo"
        />
      </NavLink>

      {/* Mobile Menu */}
      <button
        className="menu-btn nav-menu-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className="bars" aria-hidden="true" />
      </button>

      <nav className={`nav-main ${open ? "open" : ""}`} aria-label="Primary">

        {Object.entries(menus).map(([key, items]) => (
          <div
            className={`${activeMenu === key ? "drop active nav-drop" : "drop nav-drop"}${isCurrent(key) ? " is-current" : ""}`}
            key={key}
          >

            {/* Main Navbar Item */}
            <NavLink
              to={`/${key}`}
              onClick={(e) => handleMenuClick(key, e)}
            >
              {key[0].toUpperCase() + key.slice(1)}
            </NavLink>

            {/* Dropdown */}
            {items.length > 0 && (
              <div
                className={
                activeMenu === key
                ? "mega show nav-mega"
                : "mega nav-mega"
            }
              >
                {items.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={
                      activeItem === item.label
                        ? "active-item"
                        : ""
                    }
                    onClick={() => {
                      setActiveItem(item.label);
                      setActiveMenu(null);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}

          </div>
        ))}

        {/* Contact */}
        <NavLink
          className="nav-cta nav-cta-animated"
          to="/contact"
          onClick={() => {
            setActiveMenu(null);
            setActiveItem(null);
            setOpen(false);
          }}
        >
          Contact
        </NavLink>

      </nav>
    </header>
  );
}
