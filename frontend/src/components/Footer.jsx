import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import { navItems, reserveLabel } from "../data/portfolio";

function Footer() {
  const { t } = useLang();
  const links = [...navItems, { label: reserveLabel, path: "/booking" }];

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>Izak&apos;s Photos</span>
        </Link>
        <p>
          {t({
            en: "Photography built around light, timing, and story.",
            es: "Fotografía construida sobre la luz, el momento y la historia.",
          })}
        </p>
      </div>

      <nav aria-label="Footer">
        {links.map((item) => (
          <Link to={item.path} key={item.path}>
            {t(item.label)}
          </Link>
        ))}
      </nav>

      <div className="footer-contact">
        <span>
          <MapPin size={16} strokeWidth={1.7} aria-hidden="true" />
          {t({ en: "Santo Domingo, DR · Available worldwide", es: "Santo Domingo, RD · Disponible en todo el mundo" })}
        </span>
        <span>
          <CalendarCheck size={16} strokeWidth={1.7} aria-hidden="true" />
          {t({ en: "Replies to every inquiry personally", es: "Respondo cada solicitud personalmente" })}
        </span>
        <Link className="text-link" to="/booking">
          {t({ en: "Send an inquiry", es: "Enviar una solicitud" })}
          <ArrowRight size={15} strokeWidth={1.8} />
        </Link>
      </div>

      <p className="footer-rights">© {new Date().getFullYear()} Izak&apos;s Photos.</p>
    </footer>
  );
}

export default Footer;
