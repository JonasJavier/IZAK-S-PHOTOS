import { ArrowRight, Camera, CalendarClock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedWork from "../components/FeaturedWork";
import PhotoCarousel from "../components/PhotoCarousel";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { heroSlides, processSteps, services, studioStats } from "../data/portfolio";

const serviceIcons = [Camera, Sparkles, CalendarClock];

function HomePage() {
  return (
    <>
      <PhotoCarousel slides={heroSlides} />

      {/* Manifesto + stats */}
      <section className="section-shell intro">
        <Reveal className="intro-copy">
          <span className="section-label">Izak's Photos — Studio</span>
          <h2 className="intro-statement">
            Elegant visuals for <em>portraits</em>, <em>weddings</em>, and <em>brands</em> that deserve atmosphere.
          </h2>
        </Reveal>
        <div className="stat-row">
          {studioStats.map((stat, i) => (
            <Reveal as="article" className="stat" key={stat.label} delay={i * 70}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="section-shell selected">
        <Reveal className="section-head split">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">Stories shaped with light, direction, and restraint.</h2>
          </div>
          <p>
            A short edit across portraits, weddings, editorial, and travel. The full gallery filters by category
            and opens every frame in a focused viewer.
          </p>
        </Reveal>

        <FeaturedWork />

        <Reveal className="selected-cta">
          <Link className="button button-ghost" to="/projects">
            Explore the Full Gallery
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="services">
        <div className="section-shell">
          <Reveal className="section-head split">
            <div>
              <span className="section-label">Services</span>
              <h2 className="section-title">Built for the way your images need to work.</h2>
            </div>
            <p>Every session begins with a focused plan, a calm production day, and a polished delivery path.</p>
          </Reveal>

          <div className="service-grid">
            {services.map((service, i) => {
              const Icon = serviceIcons[i] || Camera;
              return (
                <Reveal as="article" className="service-card" key={service.title} delay={i * 90}>
                  <div className="service-image">
                    <img src={service.image} alt="" loading="lazy" />
                    <span className="service-number">{service.number}</span>
                  </div>
                  <div className="service-body">
                    <span className="service-tag">
                      <Icon size={16} strokeWidth={1.7} />
                      {service.duration}
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="service-foot">
                      <strong>From {service.price}</strong>
                      <Link className="text-link" to="/booking">
                        Book
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
            <span className="section-label">The Process</span>
            <h2 className="section-title">Clear from the first idea to the final gallery.</h2>
          </Reveal>
          <div className="process-row">
            {processSteps.map((step, i) => (
              <Reveal as="article" className="process-step" key={step.number} delay={i * 80}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
            <span className="section-label">Reserve a Session</span>
            <h2 className="section-title">Ready to build the next gallery?</h2>
            <p>Share the shape of your project and receive availability, guidance, and a clear next step.</p>
          </Reveal>
          <Reveal delay={120}>
            <Link className="button button-primary button-lg" to="/booking">
              Start Booking
              <ArrowRight size={18} strokeWidth={1.7} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default HomePage;
