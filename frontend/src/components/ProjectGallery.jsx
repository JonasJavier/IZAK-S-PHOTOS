import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categories, photos } from "../data/portfolio";

/**
 * Filterable masonry gallery with a full keyboard-navigable lightbox.
 * `limit` renders a compact preview (used on the homepage).
 */
function ProjectGallery({ limit }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () => (activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const visible = limit ? filtered.slice(0, limit) : filtered;
  const lightboxOpen = lightboxIndex >= 0;
  const current = lightboxOpen ? visible[lightboxIndex] : null;

  const close = useCallback(() => setLightboxIndex(-1), []);
  const step = useCallback(
    (dir) => setLightboxIndex((i) => (i + dir + visible.length) % visible.length),
    [visible.length],
  );

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    document.body.classList.add("lightbox-lock");
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("lightbox-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, close, step]);

  return (
    <div className="gallery">
      <div className="gallery-filter" role="tablist" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="masonry">
        {visible.map((photo, i) => (
          <figure className="masonry-item" key={photo.id} style={{ aspectRatio: `${photo.w} / ${photo.h}` }}>
            <button
              type="button"
              className="masonry-button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Open ${photo.title}`}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" width={photo.w} height={photo.h} />
              <span className="masonry-caption">
                <small>{photo.category}</small>
                <strong>{photo.title}</strong>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {lightboxOpen && current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title}>
          <button type="button" className="lightbox-backdrop" aria-label="Close" onClick={close} />

          <button type="button" className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="Previous image">
            <ArrowLeft size={22} strokeWidth={1.6} />
          </button>

          <figure className="lightbox-figure">
            <img src={current.src} alt={current.title} />
            <figcaption>
              <span>
                <strong>{current.title}</strong>
                <small>{current.location}</small>
              </span>
              <span className="lightbox-count">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <button type="button" className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="Next image">
            <ArrowRight size={22} strokeWidth={1.6} />
          </button>

          <button type="button" className="lightbox-close" onClick={close} aria-label="Close preview">
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
