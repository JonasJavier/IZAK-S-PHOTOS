import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AUTOPLAY_MS = 6000;

/** Full-bleed cinematic hero: crossfading slides with a slow Ken Burns drift. */
function PhotoCarousel({ slides }) {
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
            style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: slide.position || "center" }}
          />
        ))}
        <div className="hero-scrim" />
        <div className="hero-grain" />
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <span key={`k-${index}`} className="hero-kicker">{active.kicker}</span>
          <h1 key={`t-${index}`} className="hero-title">{active.title}</h1>
          <p key={`p-${index}`} className="hero-lede">{active.text}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              View the Gallery
              <ArrowRight size={18} strokeWidth={1.7} />
            </Link>
            <Link className="button button-ghost" to="/booking">
              Book a Session
            </Link>
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
                aria-label={`Slide ${i + 1}: ${slide.title}`}
                className={`hero-dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="hero-dot-fill" style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
              </button>
            ))}
          </div>
          <span className="hero-count">
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <i />
            {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>

      <span className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </span>
    </section>
  );
}

export default PhotoCarousel;
