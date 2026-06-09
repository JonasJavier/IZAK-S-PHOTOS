import { Globe } from "lucide-react";
import { useLang } from "../i18n";

/** Always-on-screen language switcher, pinned bottom-right. */
function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label="Select language">
      <Globe size={15} strokeWidth={1.8} aria-hidden="true" />
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true" />
      <button
        type="button"
        className={lang === "es" ? "is-active" : ""}
        aria-pressed={lang === "es"}
        onClick={() => setLang("es")}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageToggle;
