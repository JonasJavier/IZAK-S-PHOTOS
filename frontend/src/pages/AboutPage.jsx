import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { useLang } from "../i18n";
import { about, processSteps, studioStats } from "../data/portfolio";

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* Split hero */}
      <section className="about-hero">
        <Reveal className="about-hero-media" variant="zoom">
          <img src={about.image} alt={t({ en: "Izak at work with a camera", es: "Izak trabajando con una cámara" })} />
        </Reveal>
        <Reveal className="about-hero-copy" variant="right">
          <span className="section-label">{t({ en: "About", es: "Sobre mí" })}</span>
          <h1>
            {t({
              en: "Photography that reveals the truth in a glance, a gesture, a place.",
              es: "Fotografía que revela la verdad en una mirada, un gesto, un lugar.",
            })}
          </h1>
          <p>{t(about.lede)}</p>
          <Link className="button button-primary" to="/booking">
            {t({ en: "Work Together", es: "Trabajemos Juntos" })}
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
        </Reveal>
      </section>

      {/* Story + pull quote */}
      <section className="section-shell about-story">
        <Reveal className="about-story-text">
          <span className="section-label">{t({ en: "The Studio", es: "El Estudio" })}</span>
          <h2 className="section-title">
            {t({
              en: "Quiet direction. Precise light. Images with room to breathe.",
              es: "Dirección tranquila. Luz precisa. Imágenes con espacio para respirar.",
            })}
          </h2>
          <p>{t(about.intro)}</p>
          <p>{t(about.body)}</p>
          <p className="about-location">{t(about.location)}</p>
        </Reveal>
        <Reveal className="about-quote" variant="right" delay={120}>
          <blockquote>&ldquo;{t(about.quote)}&rdquo;</blockquote>
          <img src={about.portrait} alt="" loading="lazy" />
          <span className="about-signature">{about.signature}</span>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="about-principles">
        <div className="section-shell">
          <div className="principle-grid">
            {about.principles.map((principle, i) => (
              <Reveal as="article" className="principle" key={i} delay={i * 90}>
                <span className="principle-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(principle.title)}</h3>
                <p>{t(principle.description)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-shell about-stats">
        {studioStats.map((stat, i) => (
          <Reveal as="article" className="stat" key={stat.value} delay={i * 70}>
            <strong>{stat.value}</strong>
            <span>{t(stat.label)}</span>
          </Reveal>
        ))}
      </section>

      {/* Process */}
      <section className="process">
        <div className="section-shell">
          <Reveal className="section-head">
            <span className="section-label">{t({ en: "Working Style", es: "Forma de Trabajo" })}</span>
            <h2 className="section-title">
              {t({ en: "A simple path for polished, intentional work.", es: "Un camino simple para un trabajo pulido e intencional." })}
            </h2>
          </Reveal>
          <div className="process-row">
            {processSteps.map((step, i) => (
              <Reveal as="article" className="process-step" key={step.number} delay={i * 80}>
                <span className="process-number">{step.number}</span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.description)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default AboutPage;
