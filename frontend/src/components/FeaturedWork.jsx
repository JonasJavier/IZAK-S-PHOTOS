import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featured } from "../data/portfolio";
import Reveal from "./Reveal";

/** Asymmetric editorial showcase for the homepage — a lead frame plus a stack. */
function FeaturedWork() {
  const [lead, ...rest] = featured;

  return (
    <div className="featured">
      <Reveal className="featured-lead" variant="zoom">
        <Link to="/projects" className="featured-card featured-card-lead" aria-label={`${lead.title} — open gallery`}>
          <img src={lead.src} alt={lead.title} loading="lazy" />
          <span className="featured-meta">
            <small>{lead.category}</small>
            <strong>{lead.title}</strong>
            <ArrowUpRight size={18} strokeWidth={1.7} />
          </span>
        </Link>
      </Reveal>

      <div className="featured-stack">
        {rest.map((photo, i) => (
          <Reveal key={photo.id} delay={i * 80}>
            <Link to="/projects" className="featured-card" aria-label={`${photo.title} — open gallery`}>
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <span className="featured-meta">
                <small>{photo.category}</small>
                <strong>{photo.title}</strong>
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWork;
