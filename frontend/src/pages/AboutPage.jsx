import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { about, processSteps, studioStats } from "../data/portfolio";

function AboutPage() {
  return (
    <>
      {/* Split hero */}
      <section className="about-hero">
        <Reveal className="about-hero-media" variant="zoom">
          <img src={about.image} alt="Izak in the studio, holding a camera" />
        </Reveal>
        <Reveal className="about-hero-copy" variant="right">
          <span className="section-label">About</span>
          <h1>Photography that reveals the truth in a glance, a gesture, a place.</h1>
          <p>{about.lede}</p>
          <Link className="button button-primary" to="/booking">
            Work Together
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
        </Reveal>
      </section>

      {/* Story + pull quote */}
      <section className="section-shell about-story">
        <Reveal className="about-story-text">
          <span className="section-label">The Studio</span>
          <h2 className="section-title">Quiet direction. Precise light. Images with room to breathe.</h2>
          <p>{about.intro}</p>
          <p>{about.body}</p>
          <p className="about-location">{about.location}</p>
        </Reveal>
        <Reveal className="about-quote" variant="right" delay={120}>
          <blockquote>“Less posing. More presence.”</blockquote>
          <img src={about.portrait} alt="" loading="lazy" />
          <span className="about-signature">{about.signature}</span>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="about-principles">
        <div className="section-shell">
          <div className="principle-grid">
            {about.principles.map((principle, i) => (
              <Reveal as="article" className="principle" key={principle.title} delay={i * 90}>
                <span className="principle-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-shell about-stats">
        {studioStats.map((stat, i) => (
          <Reveal as="article" className="stat" key={stat.label} delay={i * 70}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      {/* Process */}
      <section className="process">
        <div className="section-shell">
          <Reveal className="section-head">
            <span className="section-label">Working Style</span>
            <h2 className="section-title">A simple path for polished, intentional work.</h2>
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
    </>
  );
}

export default AboutPage;
