import { NavLink, useRoute } from "../components/router.jsx";
import { JOB_OPENINGS } from "../data/jobs.js";

export default function JobDescription() {
  const path = useRoute();

  const jobSlug = path
    .replace("/careers/", "")
    .split("/")[0];

  const job = JOB_OPENINGS.find(
    (item) => item.slug === jobSlug
  );

  // ---------------------------------------
  // JOB NOT FOUND
  // ---------------------------------------

  if (!job) {
    return (
      <main className="inner cr-page">
        <section className="cr-job-detail">

          <NavLink
            to="/careers"
            className="cr-job-back"
          >
            ← Back to Careers
          </NavLink>

          <div className="cr-job-detail-header">
            <p className="kicker">Careers</p>

            <h1>Job Not Found</h1>

            <p className="cr-job-detail-meta">
              The job you are looking for does not exist.
            </p>
          </div>

          <div className="cr-job-detail-action">
            <NavLink
              to="/careers"
              className="cr-apply-job"
            >
              View All Jobs
            </NavLink>
          </div>

        </section>
      </main>
    );
  }

  return (
    <main className="inner cr-page">
      <section className="cr-job-detail">

        {/* Back to Careers */}

        <NavLink
          to="/careers"
          className="cr-job-back"
        >
          ← Back to Careers
        </NavLink>


        {/* Job Header */}

        <div className="cr-job-detail-header">

          <p className="kicker">
            {job.category}
          </p>

          <h1>
            {job.title}
          </h1>

          <div className="cr-job-detail-meta">
            <span>{job.location}</span>

            <span>•</span>

            <span>{job.category}</span>
          </div>

        </div>


        {/* Job Content */}

        <div className="cr-job-detail-content">

          {/* Role Description */}

          {job.roleDescription?.length > 0 && (
            <section className="cr-detail-section">

              <p className="kicker">
                Role Description
              </p>

              {job.roleDescription.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </section>
          )}


          {/* Responsibilities */}

          {job.responsibilities?.length > 0 && (
            <section className="cr-detail-section">

              <p className="kicker">
                Job Responsibilities
              </p>

              <ul>
                {job.responsibilities.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}


          {/* Skills & Experience */}

          {job.skills?.length > 0 && (
            <section className="cr-detail-section">

              <p className="kicker">
                Skills & Experience
              </p>

              <ul>
                {job.skills.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}


          {/* Qualifications */}

          {job.qualifications?.length > 0 && (
            <section className="cr-detail-section">

              <p className="kicker">
                Qualifications
              </p>

              <ul>
                {job.qualifications.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}


          {/* Short Description */}

          {!job.roleDescription?.length &&
            !job.responsibilities?.length &&
            !job.skills?.length &&
            !job.qualifications?.length &&
            job.shortDescription && (
              <section className="cr-detail-section">

                <p className="kicker">
                  Job Description
                </p>

                <p>
                  {job.shortDescription}
                </p>

              </section>
            )}

        </div>


        {/* Apply Button */}

        <div className="cr-job-detail-action">

          <NavLink
            to="/careers"
            className="cr-apply-job"
          >
            Apply Now
          </NavLink>

        </div>

      </section>
    </main>
  );
}