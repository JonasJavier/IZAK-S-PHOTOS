import { Instagram, Mail, MapPin } from "lucide-react";
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
        <a href="mailto:hello@izaksphotos.com">
          <Mail size={16} strokeWidth={1.7} />
          hello@izaksphotos.com
        </a>
        <span>
          <MapPin size={16} strokeWidth={1.7} />
          {t({ en: "Santo Domingo, DR", es: "Santo Domingo, RD" })}
        </span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram size={16} strokeWidth={1.7} />
          Instagram
        </a>
      </div>

      <p className="footer-rights">© {new Date().getFullYear()} Izak&apos;s Photos.</p>
    </footer>
  );
}

export default Footer;
