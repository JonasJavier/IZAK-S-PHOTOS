import { Globe } from "lucide-react";
import { useLang } from "../i18n";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

/** Compact EN/ES switch. Rendered in the header (desktop) and in the mobile menu. */
function LanguageToggle({ className = "" }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={`lang-toggle ${className}`.trim()}
      role="group"
      aria-label={t({ en: "Language", es: "Idioma" })}
    >
      <Globe size={15} strokeWidth={1.8} aria-hidden="true" />
      {languages.map((language, i) => (
        <span className="lang-option" key={language.code}>
          {i > 0 && <span className="lang-divider" aria-hidden="true" />}
          <button
            type="button"
            lang={language.code}
            className={lang === language.code ? "is-active" : ""}
            aria-pressed={lang === language.code}
            aria-label={language.name}
            onClick={() => setLang(language.code)}
          >
            {language.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export default LanguageToggle;
