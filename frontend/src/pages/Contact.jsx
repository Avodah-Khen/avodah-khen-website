import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  useReveal();

  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    city: formData.get("city"),
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Form submission failed.");
    }

    setSent(true);
  } catch (error) {
    console.error("Form submission failed:", error);
    alert("Something went wrong. Please try again.");
  }
};
  return (
    <main className="inner">
      {/* PAGE HERO */}
      <header className="page-hero">
        <p className="kicker anim-1">Contact</p>

        <h1 className="anim-2">
          Tell us the city, the plot, or the problem
        </h1>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact page-form contact-social-wrapper">

        {/* LEFT SIDE */}
        <div className="reveal">
          <h2>Request a briefing</h2>

          <p>
            A 20-minute call. No pitch deck until we have walked the street.
          </p>

          <div className="company-address">
            <h3>Our Office</h3>

            <p>
              AVODAH &amp; KHEN
              <br />
              Mamta house 304, 3rd Floor, Swami Vivekanand Road,
              <br />
              Bandra West-Mumbai 400050, Maharashtra, India
              <br />
              <strong>Contact:</strong> +91 7507607744, +91 8265073981
              <br />
              <strong>Email:</strong> sales@avodahgroup.co
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {sent ? (
          <div>
            <h2>Thank You!</h2>

            <p>
              Your request has been submitted successfully.
            </p>

            <p>
              Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            className="reveal"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
            />

            <button
              className="btn primary"
              type="submit"
            >
              Request a briefing
            </button>
          </form>
        )}

        {/* SOCIAL ICONS */}
        <div className="contact-socials">

          {/* WhatsApp */}
          <a
            href="https://wa.me/7507607744"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="contact-social whatsapp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/abc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="contact-social instagram"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-social linkedin"
          >
            <FaLinkedinIn />
          </a>

        </div>
      </section>
    </main>
  );
}