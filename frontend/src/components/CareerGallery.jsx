
import { useState } from "react";
import "./CareerGallery.css";

const modules = import.meta.glob(
  "../assets/career/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const photos = Object.entries(modules).map(([path, src]) => {
  const parts = path.replaceAll("\\", "/").split("/");
  const category = parts[parts.length - 2];

  return {
    src,
    category,
    name: parts[parts.length - 1],
  };
});

const filters = [
  { id: "all", label: "All Memories" },
  { id: "diwali", label: "Celebrations" },
  { id: "picnic", label: "Team Outings" },
  { id: "awards", label: "Achievements" },
];

export default function CareerGallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const visiblePhotos =
    active === "all"
      ? photos
      : photos.filter((photo) => photo.category === active);

  return (
    <section className="career-gallery">
      <div className="career-gallery-heading">
        <p className="kicker">LIFE AT AVODAH &amp; KHEN</p>

        <h2>
          More than work.
          <br />
          <em>A shared journey.</em>
        </h2>

        <p>
          Celebrating the people, experiences and milestones
          that bring our team together.
        </p>
      </div>

      <div className="career-gallery-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={active === filter.id ? "active" : ""}
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visiblePhotos.length > 0 ? (
        <div className="career-gallery-grid">
          {visiblePhotos.map((photo) => (
            <button
              type="button"
              className="career-gallery-photo"
              key={photo.src}
              onClick={() => setSelected(photo)}
              aria-label={`View ${photo.name}`}
            >
              <img
                src={photo.src}
                alt={photo.name
                  .replace(/\.[^.]+$/, "")
                  .replace(/[-_]/g, " ")}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="career-gallery-empty">
          {photos.length === 0
            ? "Add photos to the career folders to build your gallery."
            : "No photos in this category yet."}
        </p>
      )}

      {selected && (
        <div
          className="career-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Company photo"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="career-gallery-close"
            aria-label="Close photo"
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <img
            src={selected.src}
            alt={selected.name}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
