import { ArrowRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

const AUTOPLAY_MS = 6500;
const SWIPE_PX = 50;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Full-bleed cinematic hero: crossfading slides with a slow Ken Burns drift. */
function PhotoCarousel({ slides }) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  // `stopped` is the visitor's explicit choice; hover/focus only pause temporarily.
  const [stopped, setStopped] = useState(prefersReducedMotion);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  // Bumped on every resume so the progress bar restarts in step with the timer.
  const [cycle, setCycle] = useState(0);
  const touchStart = useRef(null);
  const count = slides.length;
  const paused = stopped || hovered || focused;

  const goTo = useCallback((next) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return undefined;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, count]);

  useEffect(() => {
    if (!paused) setCycle((c) => c + 1);
  }, [paused]);

  // Only a real mouse pauses on hover; taps emulate mouseenter without a mouseleave.
  const onPointerEnter = (event) => event.pointerType === "mouse" && setHovered(true);
  const onPointerLeave = (event) => event.pointerType === "mouse" && setHovered(false);

  const onTouchStart = (event) => {
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };
  const onTouchEnd = (event) => {
    if (!touchStart.current) return;
    const dx = event.changedTouches[0].clientX - touchStart.current.x;
    const dy = event.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) goTo(index + (dx < 0 ? 1 : -1));
  };

  const active = slides[index];

  return (
    <section
      className={`hero ${paused ? "is-paused" : ""} ${stopped ? "is-stopped" : ""}`}
      aria-roledescription="carousel"
      aria-label={t({ en: "Featured photography", es: "Fotografía destacada" })}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={() => setFocused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setFocused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
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
        <div className="hero-text" aria-live={stopped ? "polite" : "off"}>
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
        <div className="hero-dots" role="group" aria-label={t({ en: "Choose slide", es: "Elegir imagen" })}>
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-current={i === index ? "true" : undefined}
              aria-label={`${t({ en: "Slide", es: "Imagen" })} ${i + 1}: ${t(slide.kicker)}`}
              className={`hero-dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            >
              <span
                key={i === index ? `fill-${index}-${cycle}` : undefined}
                className="hero-dot-fill"
                style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hero-toggle"
          aria-pressed={stopped}
          aria-label={stopped ? t({ en: "Play slideshow", es: "Reproducir" }) : t({ en: "Pause slideshow", es: "Pausar" })}
          onClick={() => setStopped((s) => !s)}
        >
          {stopped ? <Play size={14} strokeWidth={2} /> : <Pause size={14} strokeWidth={2} />}
        </button>
        <span className="hero-count" aria-hidden="true">
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
