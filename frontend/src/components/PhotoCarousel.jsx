import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

const AUTOPLAY_MS = 6500;

/** Full-bleed cinematic hero: crossfading slides with a slow Ken Burns drift. */
function PhotoCarousel({ slides }) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const timer = useRef(null);

  const goTo = useCallback((next) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return undefined;
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(timer.current);
  }, [index, paused, count]);

  const active = slides[index];

  return (
    <section
      className="hero"
      aria-label="Featured photography"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-stage" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`hero-slide ${i === index ? "is-active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              "--hero-pos": slide.position || "center",
              "--hero-pos-mobile": slide.positionMobile || slide.position || "center",
            }}
          />
        ))}
        <div className="hero-scrim" />
        <div className="hero-grain" />
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <span key={`k-${index}`} className="hero-kicker">{t(active.kicker)}</span>
          <h1 key={`t-${index}`} className="hero-title">{t(active.title)}</h1>
          <p key={`p-${index}`} className="hero-lede">{t(active.text)}</p>
          <div className="hero-actions">
            <Link className="button button-primary button-lg" to="/projects">
              {t({ en: "View the Gallery", es: "Ver la Galería" })}
              <ArrowRight size={19} strokeWidth={1.7} />
            </Link>
            <Link className="button button-ghost button-lg" to="/booking">
              {t({ en: "Book a Session", es: "Reservar Sesión" })}
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}`}
              className={`hero-dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            >
              <span
                className="hero-dot-fill"
                style={{ animationDuration: paused ? "0ms" : `${AUTOPLAY_MS}ms` }}
              />
            </button>
          ))}
        </div>
        <span className="hero-count">
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <i />
          {String(count).padStart(2, "0")}
        </span>
      </div>

      <span className="hero-scroll" aria-hidden="true">
        <span>{t({ en: "Scroll", es: "Desliza" })}</span>
        <i />
      </span>
    </section>
  );
}

export default PhotoCarousel;
