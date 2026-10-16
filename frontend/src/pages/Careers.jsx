import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";
import { JOB_OPENINGS } from "../data/jobs.js";
import careersTeam from "../assets/careers-team.png";
import CareerGallery from "../components/CareerGallery.jsx";

const DEPARTMENTS = ["Sales", "Marketing", "IT"];
const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  department: "",
  jobTitle: "",
  message: "",
};

const PHONE_RE = /^(\+91[-\s]?)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Contact number is required.";
  } else if (!PHONE_RE.test(form.phone.trim())) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.department) {
    errors.department = "Please select a department.";
  }

  if (!form.jobTitle.trim()) {
    errors.jobTitle = "Please tell us the role you're applying for.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us a little about yourself.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export default function Careers() {
  useReveal();

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [keyword, setKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (field) => (e) => {
    const { value } = e.target;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      if (!prev[field]) return prev;

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleApplyJob = (jobTitle) => {
    setForm((prev) => ({
      ...prev,
      jobTitle,
    }));

    setErrors((prev) => {
      if (!prev.jobTitle) return prev;

      const next = { ...prev };
      delete next.jobTitle;
      return next;
    });

    setTimeout(() => {
      const jobField = document.getElementById("cr-jobTitle");

      if (jobField) {
        jobField.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        jobField.focus();
      }
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate(form);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length !== 0) {
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/careers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            email: form.email,
            department: form.department,
            jobTitle: form.jobTitle,
            message: form.message,
          }),
        }
      );

      const result = await response.json();

      console.log("Career API response:", result);
      console.log("Career API status:", response.status);

      if (!response.ok) {
        throw new Error(
          result.message || "Application submission failed."
        );
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Application submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    const matchesCategory =
      selectedCategory === "All" ||
      job.category === selectedCategory;

    const matchesTeam =
      !selectedTeam ||
      job.category === selectedTeam;

    const searchText = keyword.toLowerCase().trim();

    const matchesKeyword =
      !searchText ||
      job.title.toLowerCase().includes(searchText) ||
      job.category.toLowerCase().includes(searchText) ||
      job.description.toLowerCase().includes(searchText);

    const matchesLocation =
      !selectedLocation ||
      job.location === selectedLocation;

    return (
      matchesCategory &&
      matchesTeam &&
      matchesKeyword &&
      matchesLocation
    );
  });

  const resetSearch = () => {
    setSelectedTeam("");
    setKeyword("");
    setSelectedLocation("");
    setSelectedCategory("All");
  };

  return (
    <main className="inner cr-page">

      {/* HERO */}
      <section className="hero cr-hero">
        <div className="cr-hero-bg" aria-hidden="true" />

        <div className="hero-copy cr-hero-copy">
          <p className="kicker anim-1">Careers</p>

          <h1 className="anim-2">
            Build Your Future With Us
          </h1>

          <p className="lede cr-hero-lede anim-3">
            Join AVODAH &amp; KHEN and be part of a team
            shaping the future of real estate, technology and finance.
          </p>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="cr-jobs-section">

        {/* INTRO */}
        
{/* INTRO */}
<div className="cr-jobs-header reveal">
  <div className="cr-jobs-header-content">
    <p className="kicker">Current Opportunities</p>

    <h2>Find Your Next Opportunity</h2>

    <p>
      Explore current openings and discover where you can
      build your career with AVODAH &amp; KHEN.
    </p>
  </div>

  
<div className="cr-jobs-header-image">
  <img
    src={careersTeam}
    alt="Avodah & Khen team"
    loading="lazy"
  />
</div>

</div>

        {/* SEARCH */}
        <div className="cr-job-search reveal">

          <select
            id="job-team"
            value={selectedTeam}
            onChange={(e) => {
              setSelectedTeam(e.target.value);
              setSelectedCategory("All");
            }}
            aria-label="Select team"
          >
            <option value="">
              All Teams
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Product">
              Product
            </option>

            <option value="Sales">
              Sales
            </option>

            <option value="Marketing">
              Marketing
            </option>

            <option value="Research">
              Research
            </option>

            <option value="Analytics">
              Analytics
            </option>
          </select>

          <input
            id="job-keyword"
            type="text"
            placeholder="Keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            aria-label="Search jobs by keyword"
          />

          <select
            id="job-location"
            value={selectedLocation}
            onChange={(e) =>
              setSelectedLocation(e.target.value)
            }
            aria-label="Select location"
          >
            <option value="">
              Any Location
            </option>

            <option value="India">
              India
            </option>
          </select>

          <button
            type="button"
            className="btn primary cr-job-search-btn"
            onClick={() => {
              document
                .querySelector(".cr-openings-list")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            Search Jobs
          </button>

        </div>

        {/* OPENINGS */}
        <div className="cr-openings-layout">

          {/* LEFT FILTER */}
          <aside className="cr-openings-sidebar">

            <p className="cr-openings-label">
              CURRENT OPENINGS
            </p>

            {/* ALL */}
            <button
              type="button"
              className={`cr-opening-filter ${
                selectedCategory === "All"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("All");
                setSelectedTeam("");
              }}
            >
              <span>
                All Openings
              </span>

              <span>
                {JOB_OPENINGS.length}
              </span>
            </button>

            {/* TECHNOLOGY */}
            <button
              type="button"
              className={`cr-opening-filter ${
                selectedCategory === "Technology"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("Technology");
                setSelectedTeam("");
              }}
            >
              <span>
                Technology
              </span>

              <span>
                {
                  JOB_OPENINGS.filter(
                    (job) =>
                      job.category === "Technology"
                  ).length
                }
              </span>
            </button>

            {/* SALES */}
            <button
              type="button"
              className={`cr-opening-filter ${
                selectedCategory === "Sales"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("Sales");
                setSelectedTeam("");
              }}
            >
              <span>
                Sales
              </span>

              <span>
                {
                  JOB_OPENINGS.filter(
                    (job) =>
                      job.category === "Sales"
                  ).length
                }
              </span>
            </button>

            {/* PRODUCT */}
            <button
              type="button"
              className={`cr-opening-filter ${
                selectedCategory === "Product"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("Product");
                setSelectedTeam("");
              }}
            >
              <span>
                Product
              </span>

              <span>
                {
                  JOB_OPENINGS.filter(
                    (job) =>
                      job.category === "Product"
                  ).length
                }
              </span>
            </button>

            {/* MARKETING */}
            <button
              type="button"
              className={`cr-opening-filter ${
                selectedCategory === "Marketing"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("Marketing");
                setSelectedTeam("");
              }}
            >
              <span>
                Marketing
              </span>

              <span>
                {
                  JOB_OPENINGS.filter(
                    (job) =>
                      job.category === "Marketing"
                  ).length
                }
              </span>
            </button>

            {/* RESET */}
            {(selectedTeam ||
              keyword ||
              selectedLocation ||
              selectedCategory !== "All") && (
              <button
                type="button"
                className="cr-job-reset"
                onClick={resetSearch}
              >
                Clear Filters
              </button>
            )}

          </aside>

          {/* RIGHT SIDE */}
          <div className="cr-openings-list">

            <div className="cr-openings-list-header">
              <p className="kicker">
                Opportunities
              </p>

              <h3>
                All Openings
              </h3>

              <p className="cr-results-count">
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1
                  ? "position"
                  : "positions"}{" "}
                available
              </p>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (

                <article
                  className="cr-job-card reveal"
                  key={job.title}
                >

                  <div className="cr-job-main">

                    <h4>
                      {job.title}
                    </h4>

                    <div className="cr-job-meta">
                      <span>
                        {job.location}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {job.category}
                      </span>
                    </div>

                    <span className="cr-job-tag">
                      {job.category}
                    </span>

                  </div>

                  <div className="cr-job-action">

                  <NavLink
                    to={`/careers/${job.slug}`}
                    className="cr-job-description-link"
                  >
                    Job Description
                </NavLink>

                    <button
                      type="button"
                      className="btn primary cr-apply-job"
                      onClick={() =>
                        handleApplyJob(job.title)
                      }
                    >
                      Apply Now
                    </button>

                  </div>

                </article>

              ))
            ) : (
              <div className="cr-no-results">
                <p className="kicker">
                  No Openings Found
                </p>

                <h4>
                  We couldn't find a matching position.
                </h4>

                <p>
                  Try changing your search or clearing
                  the filters.
                </p>

                <button
                  type="button"
                  className="btn primary"
                  onClick={resetSearch}
                >
                  View All Openings
                </button>
              </div>
            )}

          </div>

        </div>

      </section>
      <CareerGallery />

      {/* APPLICATION SECTION */}
      <section className="cr-form-section">

        <div className="cr-form-intro reveal">
          <p className="kicker">
            Join Our Team
          </p>

          <h2>
            We would love to hear from you.
          </h2>

          <p className="cr-form-desc">
            Tell us a little about yourself and the opportunity
            you are interested in.
          </p>
        </div>

        {submitted ? (
          <div
            className="cr-success"
            role="status"
          >
            <div className="cr-success-icon">
              ✓
            </div>

            <p className="cr-success-title">
              Application Submitted
            </p>

            <p>
              Thank you for your interest in
              AVODAH &amp; KHEN.
            </p>

            <p>
              Our team will review your application
              and get back to you.
            </p>
          </div>
        ) : (
          <form
            className="cr-form reveal"
            noValidate
            onSubmit={handleSubmit}
          >

            <div className="cr-form-grid">

              {/* FIRST NAME */}
              <div className="cr-field">
                <label htmlFor="cr-firstName">
                  First Name
                </label>

                <input
                  id="cr-firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  aria-invalid={Boolean(
                    errors.firstName
                  )}
                  aria-describedby={
                    errors.firstName
                      ? "cr-firstName-error"
                      : undefined
                  }
                />

                {errors.firstName && (
                  <span
                    className="cr-error"
                    id="cr-firstName-error"
                  >
                    {errors.firstName}
                  </span>
                )}
              </div>

              {/* LAST NAME */}
              <div className="cr-field">
                <label htmlFor="cr-lastName">
                  Last Name
                </label>

                <input
                  id="cr-lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  aria-invalid={Boolean(
                    errors.lastName
                  )}
                  aria-describedby={
                    errors.lastName
                      ? "cr-lastName-error"
                      : undefined
                  }
                />

                {errors.lastName && (
                  <span
                    className="cr-error"
                    id="cr-lastName-error"
                  >
                    {errors.lastName}
                  </span>
                )}
              </div>

              {/* PHONE */}
              <div className="cr-field">
                <label htmlFor="cr-phone">
                  Contact Number
                </label>

                <input
                  id="cr-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(
                    errors.phone
                  )}
                  aria-describedby={
                    errors.phone
                      ? "cr-phone-error"
                      : undefined
                  }
                />

                {errors.phone && (
                  <span
                    className="cr-error"
                    id="cr-phone-error"
                  >
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* EMAIL */}
              <div className="cr-field">
                <label htmlFor="cr-email">
                  Email Address
                </label>

                <input
                  id="cr-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(
                    errors.email
                  )}
                  aria-describedby={
                    errors.email
                      ? "cr-email-error"
                      : undefined
                  }
                />

                {errors.email && (
                  <span
                    className="cr-error"
                    id="cr-email-error"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* DEPARTMENT */}
              <div className="cr-field">
                <label htmlFor="cr-department">
                  Department
                </label>

                <select
                  id="cr-department"
                  name="department"
                  required
                  value={form.department}
                  onChange={handleChange("department")}
                  aria-invalid={Boolean(
                    errors.department
                  )}
                  aria-describedby={
                    errors.department
                      ? "cr-department-error"
                      : undefined
                  }
                >
                  <option value="">
                    Select Department
                  </option>

                  {DEPARTMENTS.map((dept) => (
                    <option
                      key={dept}
                      value={dept}
                    >
                      {dept}
                    </option>
                  ))}
                </select>

                {errors.department && (
                  <span
                    className="cr-error"
                    id="cr-department-error"
                  >
                    {errors.department}
                  </span>
                )}
              </div>

              {/* JOB TITLE */}
              <div className="cr-field">
                <label htmlFor="cr-jobTitle">
                  Job Applied For
                </label>

                <input
                  id="cr-jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. Sales Executive"
                  required
                  value={form.jobTitle}
                  onChange={handleChange("jobTitle")}
                  aria-invalid={Boolean(
                    errors.jobTitle
                  )}
                  aria-describedby={
                    errors.jobTitle
                      ? "cr-jobTitle-error"
                      : undefined
                  }
                />

                {errors.jobTitle && (
                  <span
                    className="cr-error"
                    id="cr-jobTitle-error"
                  >
                    {errors.jobTitle}
                  </span>
                )}
              </div>

              {/* MESSAGE */}
              <div className="cr-field cr-field-full">
                <label htmlFor="cr-message">
                  Message
                </label>

                <textarea
                  id="cr-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about yourself, your experience and why you would like to join us..."
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(
                    errors.message
                  )}
                  aria-describedby={
                    errors.message
                      ? "cr-message-error"
                      : undefined
                  }
                />

                {errors.message && (
                  <span
                    className="cr-error"
                    id="cr-message-error"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

            </div>

            <div className="cr-submit-row">

              <p className="cr-submit-note">
                We respect your privacy and will only use
                your information for recruitment purposes.
              </p>

              <button
                className="btn primary cr-submit"
                type="submit"
              >
                <span>
                  Submit Application
                </span>

                <span
                  className="cr-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>

            </div>

          </form>
        )}

      </section>

    </main>
  );
}