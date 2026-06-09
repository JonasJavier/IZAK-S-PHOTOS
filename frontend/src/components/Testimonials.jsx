import { Quote, Star } from "lucide-react";
import { useLang } from "../i18n";
import { testimonials } from "../data/portfolio";
import Reveal from "./Reveal";

function Testimonials() {
  const { t } = useLang();

  return (
    <section className="testimonials">
      <div className="section-shell">
        <Reveal className="section-head">
          <span className="section-label">{t({ en: "Client Stories", es: "Testimonios" })}</span>
          <h2 className="section-title">
            {t({
              en: "Calm direction, honest images, polished delivery.",
              es: "Dirección tranquila, imágenes honestas, entrega pulida.",
            })}
          </h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, i) => (
            <Reveal as="article" className="testimonial-card" key={testimonial.name} delay={i * 90}>
              <Quote className="testimonial-quote-mark" size={28} strokeWidth={1.4} />
              <div className="testimonial-stars" aria-label="5 / 5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>{t(testimonial.quote)}</blockquote>
              <div className="testimonial-author">
                <img src={testimonial.image} alt="" />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{t(testimonial.project)}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
