import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";

function NotFoundPage() {
  const { t } = useLang();

  return (
    <section className="page-hero not-found">
      <div className="page-hero-copy">
        <span className="section-label">404</span>
        <h1>{t({ en: "This frame didn't make the final edit.", es: "Esta toma no llegó a la edición final." })}</h1>
        <p>
          {t({
            en: "The page you're looking for doesn't exist or has moved. The gallery and booking are one click away.",
            es: "La página que buscas no existe o cambió de lugar. La galería y las reservas están a un clic.",
          })}
        </p>
        <div className="not-found-actions">
          <Link className="button button-primary" to="/projects">
            {t({ en: "View the Gallery", es: "Ver la Galería" })}
            <ArrowRight size={18} strokeWidth={1.7} />
          </Link>
          <Link className="button button-ghost" to="/">
            {t({ en: "Back to Home", es: "Volver al Inicio" })}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
