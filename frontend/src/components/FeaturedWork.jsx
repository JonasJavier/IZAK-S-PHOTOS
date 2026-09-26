import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import { categories, featured } from "../data/portfolio";
import Reveal from "./Reveal";

const labelFor = (key, t) => {
  const c = categories.find((cat) => cat.key === key);
  return c ? t(c.label) : key;
};

function FeaturedCard({ photo, lead = false }) {
  const { t } = useLang();

  return (
    <Link
      to={`/projects?photo=${photo.id}`}
      className={`featured-card ${lead ? "featured-card-lead" : ""}`.trim()}
      aria-label={`${t(photo.title)} — ${labelFor(photo.category, t)}. ${t({ en: "Open in the gallery", es: "Abrir en la galería" })}`}
    >
      <img src={lead ? photo.src : photo.thumb} alt={t(photo.title)} loading="lazy" decoding="async" />
      <span className="featured-meta" aria-hidden="true">
        <small>{labelFor(photo.category, t)}</small>
        <strong>{t(photo.title)}</strong>
        <ArrowUpRight size={lead ? 18 : 16} strokeWidth={1.7} />
      </span>
    </Link>
  );
}

/** Asymmetric editorial showcase for the homepage — a lead frame plus a stack. */
function FeaturedWork() {
  const [lead, ...rest] = featured;

  return (
    <div className="featured">
      <Reveal className="featured-lead" variant="zoom">
        <FeaturedCard photo={lead} lead />
      </Reveal>

      <div className="featured-stack">
        {rest.map((photo, i) => (
          <Reveal key={photo.id} delay={i * 80}>
            <FeaturedCard photo={photo} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWork;
