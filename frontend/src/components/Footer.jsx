import { NavLink } from "./router.jsx";
import logo from "../assets/avodah-khen-logo.png";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">

        {/* Logo */}
        <div className="footer-logo-wrapper">
          <NavLink className="footer-brand" to="/">
            <img
              src={logo}
              alt="AVODAH & KHEN"
              className="footer-logo"
            />
          </NavLink>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>

          <NavLink to="/company">
            About us
          </NavLink>

          <NavLink to="/research">
            Research
          </NavLink>

          <NavLink to="/careers">
            Careers
          </NavLink>
        </div>

        {/* Studios */}
        <div>
          <h4>Studios</h4>
          <p>Mumbai</p>
        </div>

      </div>

      {/* Copyright */}
      <p className="copy">
        © {new Date().getFullYear()} AVODAH GROUP. All rights reserved.
      </p>
    </footer>
  );
}