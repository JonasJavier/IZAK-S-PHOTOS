import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import { categories, featured } from "../data/portfolio";
import Reveal from "./Reveal";

const labelFor = (key, t) => {
  const c = categories.find((cat) => cat.key === key);
  return c ? t(c.label) : key;
};

/** Asymmetric editorial showcase for the homepage — a lead frame plus a stack. */
function FeaturedWork() {
  const { t } = useLang();
  const [lead, ...rest] = featured;

  return (
    <div className="featured">
      <Reveal className="featured-lead" variant="zoom">
        <Link to="/projects" className="featured-card featured-card-lead" aria-label={t(lead.title)}>
          <img src={lead.src} alt={t(lead.title)} loading="lazy" />
          <span className="featured-meta">
            <small>{labelFor(lead.category, t)}</small>
            <strong>{t(lead.title)}</strong>
            <ArrowUpRight size={18} strokeWidth={1.7} />
          </span>
        </Link>
      </Reveal>

      <div className="featured-stack">
        {rest.map((photo, i) => (
          <Reveal key={photo.id} delay={i * 80}>
            <Link to="/projects" className="featured-card" aria-label={t(photo.title)}>
              <img src={photo.src} alt={t(photo.title)} loading="lazy" />
              <span className="featured-meta">
                <small>{labelFor(photo.category, t)}</small>
                <strong>{t(photo.title)}</strong>
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
