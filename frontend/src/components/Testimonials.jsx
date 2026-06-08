import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/portfolio";
import Reveal from "./Reveal";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-shell">
        <Reveal className="section-head">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">Calm direction, honest images, polished delivery.</h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, i) => (
            <Reveal as="article" className="testimonial-card" key={testimonial.name} delay={i * 90}>
              <Quote className="testimonial-quote-mark" size={28} strokeWidth={1.4} />
              <div className="testimonial-stars" aria-label="Five out of five stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <img src={testimonial.image} alt="" />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.project}</span>
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
