import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useLang } from "../i18n";
import { categories, photos } from "../data/portfolio";

const SWIPE_PX = 50;
const FOCUSABLE = "button, [href], [tabindex]:not([tabindex='-1'])";

// "All" deals the categories out like cards so the mosaic mixes them instead
// of stacking every portrait in the first column.
function interleave(list) {
  const groups = categories
    .filter((c) => c.key !== "All")
    .map((c) => list.filter((p) => p.category === c.key));
  const longest = Math.max(...groups.map((g) => g.length));
  const mixed = [];
  for (let i = 0; i < longest; i += 1) groups.forEach((g) => g[i] && mixed.push(g[i]));
  return mixed;
}

const allPhotos = interleave(photos);
const countFor = (key) => (key === "All" ? photos.length : photos.filter((p) => p.category === key).length);

/**
 * Filterable masonry gallery with a keyboard- and touch-friendly lightbox.
 * The active category and the open photo live in the URL (?category=&photo=),
 * so every frame has a shareable link and the homepage can deep-link into it.
 */
function ProjectGallery() {
  const { t } = useLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStart = useRef(null);

  const activeCategory = categories.find((c) => c.slug === searchParams.get("category")) ?? categories[0];
  const visible = useMemo(
    () => (activeCategory.key === "All" ? allPhotos : photos.filter((p) => p.category === activeCategory.key)),
    [activeCategory.key],
  );

  const photoId = searchParams.get("photo");
  const lightboxIndex = photoId ? visible.findIndex((p) => p.id === photoId) : -1;
  const lightboxOpen = lightboxIndex >= 0;
  const current = lightboxOpen ? visible[lightboxIndex] : null;

  const updateParams = useCallback(
    (changes) =>
      setSearchParams(
        (params) => {
          const next = new URLSearchParams(params);
          Object.entries(changes).forEach(([key, value]) => (value ? next.set(key, value) : next.delete(key)));
          return next;
        },
        { replace: true },
      ),
    [setSearchParams],
  );

  const open = (id) => updateParams({ photo: id });
  const close = useCallback(() => {
    const id = photoId;
    updateParams({ photo: null });
    // Return focus to the tile of the photo that was on screen.
    requestAnimationFrame(() => document.querySelector(`[data-photo="${id}"]`)?.focus({ preventScroll: false }));
  }, [photoId, updateParams]);
  const step = useCallback(
    (dir) => updateParams({ photo: visible[(lightboxIndex + dir + visible.length) % visible.length].id }),
    [lightboxIndex, visible, updateParams],
  );

  // Lock scroll, move focus into the dialog, and handle keys while it is open.
  useEffect(() => {
    if (!lightboxOpen) return undefined;
    document.body.classList.add("lightbox-lock");
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (event) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "Tab" && dialogRef.current) {
        const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, close, step]);

  // Warm the cache for the neighbours so arrowing through the set feels instant.
  useEffect(() => {
    if (!lightboxOpen || visible.length < 2) return;
    [1, -1].forEach((dir) => {
      const img = new Image();
      img.src = visible[(lightboxIndex + dir + visible.length) % visible.length].src;
    });
  }, [lightboxOpen, lightboxIndex, visible]);

  const onTouchStart = (event) => {
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };
  const onTouchEnd = (event) => {
    if (!touchStart.current) return;
    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  };

  return (
    <div className="gallery">
      <div className="gallery-toolbar">
        <div className="gallery-filter" role="group" aria-label={t({ en: "Filter by category", es: "Filtrar por categoría" })}>
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              aria-pressed={activeCategory.key === category.key}
              className={`filter-chip ${activeCategory.key === category.key ? "is-active" : ""}`}
              onClick={() => updateParams({ category: category.key === "All" ? null : category.slug, photo: null })}
            >
              {t(category.label)}
              <span className="filter-count">{countFor(category.key)}</span>
            </button>
          ))}
        </div>
        <p className="gallery-count" aria-live="polite">
          {visible.length} {t({ en: "photographs", es: "fotografías" })}
        </p>
      </div>

      <div className="masonry" key={activeCategory.key}>
        {visible.map((photo) => (
          <figure className="masonry-item" key={photo.id} style={{ aspectRatio: `${photo.w} / ${photo.h}` }}>
            <button
              type="button"
              className="masonry-button"
              data-photo={photo.id}
              onClick={() => open(photo.id)}
              aria-label={`${t(photo.title)} — ${t(photo.location)}`}
            >
              <img
                src={photo.thumb}
                alt={t(photo.title)}
                loading="lazy"
                decoding="async"
                width={photo.w}
                height={photo.h}
                onLoad={(event) => event.currentTarget.classList.add("is-loaded")}
                onError={(event) => event.currentTarget.classList.add("is-loaded")}
              />
              <span className="masonry-caption" aria-hidden="true">
                <small>{t(photo.location)}</small>
                <strong>{t(photo.title)}</strong>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {lightboxOpen && current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={t(current.title)} ref={dialogRef}>
          <div className="lightbox-backdrop" aria-hidden="true" onClick={close} />

          <button type="button" className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label={t({ en: "Previous photo", es: "Foto anterior" })}>
            <ArrowLeft size={22} strokeWidth={1.6} />
          </button>

          <figure className="lightbox-figure" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img
              key={current.id}
              src={current.src}
              alt={t(current.title)}
              width={current.w}
              height={current.h}
              style={{ "--ratio": current.w / current.h, backgroundImage: `url(${current.thumb})` }}
            />
            <figcaption>
              <span>
                <strong>{t(current.title)}</strong>
                <small>{t(current.location)}</small>
              </span>
              <span className="lightbox-count">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <button type="button" className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label={t({ en: "Next photo", es: "Foto siguiente" })}>
            <ArrowRight size={22} strokeWidth={1.6} />
          </button>

          <button type="button" className="lightbox-close" onClick={close} ref={closeRef} aria-label={t({ en: "Close", es: "Cerrar" })}>
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
