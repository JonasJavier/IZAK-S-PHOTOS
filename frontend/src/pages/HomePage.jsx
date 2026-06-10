import { ArrowRight, Camera, CalendarClock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedWork from "../components/FeaturedWork";
import PhotoCarousel from "../components/PhotoCarousel";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { useLang } from "../i18n";
import { heroSlides, processSteps, services, studioStats } from "../data/portfolio";

const serviceIcons = [Camera, Sparkles, CalendarClock];

function HomePage() {
  const { t } = useLang();

  return (
    <>
      <PhotoCarousel slides={heroSlides} />

      {/* Manifesto + stats */}
      <section className="section-shell intro">
        <Reveal className="intro-copy">
          <span className="section-label">{t({ en: "Izak's Photos — Studio", es: "Izak's Photos — Estudio" })}</span>
          <h2 className="intro-statement">
            {t({ en: "Elegant visuals for ", es: "Imágenes elegantes para " })}
            <em>{t({ en: "portraits", es: "retratos" })}</em>
            {t({ en: ", ", es: ", " })}
            <em>{t({ en: "weddings", es: "bodas" })}</em>
            {t({ en: ", and ", es: " y " })}
            <em>{t({ en: "brands", es: "marcas" })}</em>
            {t({ en: " that deserve atmosphere.", es: " que merecen atmósfera." })}
          </h2>
        </Reveal>
        <div className="stat-row">
          {studioStats.map((stat, i) => (
            <Reveal as="article" className="stat" key={stat.value} delay={i * 70}>
              <strong>{stat.value}</strong>
              <span>{t(stat.label)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="section-shell selected">
        <Reveal className="section-head split">
          <div>
            <span className="section-label">{t({ en: "Selected Work", es: "Trabajo Seleccionado" })}</span>
            <h2 className="section-title">
              {t({
                en: "Stories shaped with light, direction, and restraint.",
                es: "Historias moldeadas con luz, dirección y mesura.",
              })}
            </h2>
          </div>
          <p>
            {t({
              en: "A short edit across portraits, weddings, editorial, and travel. The full gallery filters by category and opens every frame in a focused viewer.",
              es: "Una breve selección de retratos, bodas, editorial y viajes. La galería completa filtra por categoría y abre cada imagen en un visor a pantalla completa.",
            })}
          </p>
        </Reveal>

        <FeaturedWork />

        <Reveal className="selected-cta">
          <Link className="button button-ghost" to="/projects">
            {t({ en: "Explore the Full Gallery", es: "Explorar la Galería Completa" })}
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="services">
        <div className="section-shell">
          <Reveal className="section-head split">
            <div>
              <span className="section-label">{t({ en: "Services", es: "Servicios" })}</span>
              <h2 className="section-title">
                {t({ en: "Built for the way your images need to work.", es: "Pensado para lo que tus imágenes necesitan lograr." })}
              </h2>
            </div>
            <p>
              {t({
                en: "Every session begins with a focused plan, a calm production day, and a polished delivery path.",
                es: "Cada sesión empieza con un plan claro, un día de producción tranquilo y una entrega pulida.",
              })}
            </p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, i) => {
              const Icon = serviceIcons[i] || Camera;
              return (
                <Reveal as="article" className="service-card" key={service.number} delay={i * 90}>
                  <div className="service-image">
                    <img src={service.image} alt="" loading="lazy" />
                    <span className="service-number">{service.number}</span>
                  </div>
                  <div className="service-body">
                    <span className="service-tag">
                      <Icon size={16} strokeWidth={1.7} />
                      {t(service.duration)}
                    </span>
                    <h3>{t(service.title)}</h3>
                    <p>{t(service.summary)}</p>
                    <ul>
                      {t(service.details).map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="service-foot">
                      <strong>{t({ en: "From", es: "Desde" })} {service.price}</strong>
                      <Link className="text-link" to="/booking">
                        {t({ en: "Book", es: "Reservar" })}
                        <ArrowRight size={15} strokeWidth={1.8} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="section-shell">
          <Reveal className="section-head">
            <span className="section-label">{t({ en: "The Process", es: "El Proceso" })}</span>
            <h2 className="section-title">
              {t({ en: "Clear from the first idea to the final gallery.", es: "Claro desde la primera idea hasta la galería final." })}
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

      {/* CTA */}
      <section className="cta">
        <div className="section-shell cta-inner">
          <Reveal>
            <span className="section-label">{t({ en: "Reserve a Session", es: "Reserva una Sesión" })}</span>
            <h2 className="section-title">{t({ en: "Ready to build the next gallery?", es: "¿Creamos la próxima galería?" })}</h2>
            <p>
              {t({
                en: "Share the shape of your project and receive availability, guidance, and a clear next step.",
                es: "Cuéntame de qué trata tu proyecto y te respondo con disponibilidad, orientación y un siguiente paso claro.",
              })}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link className="button button-primary button-lg" to="/booking">
              {t({ en: "Start Booking", es: "Empezar Reserva" })}
              <ArrowRight size={18} strokeWidth={1.7} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default HomePage;
