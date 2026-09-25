import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

/**
 * Lightweight bilingual layer. Wrap the app once; components call `t(value)`.
 * - t({ en, es }) -> the string for the active language
 * - t("plain")    -> returned untouched (so it is safe on any value)
 * - t({ en: [...], es: [...] }) -> the array for the active language
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("izak-lang");
      if (saved === "en" || saved === "es") return saved;
      if (navigator.language && navigator.language.toLowerCase().startsWith("es")) return "es";
    } catch {
      /* ignore */
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("izak-lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (v) => {
      if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "es" in v)) {
        return v[lang] ?? v.en ?? "";
      }
      return v;
    };
    return { lang, setLang, toggle: () => setLang((l) => (l === "en" ? "es" : "en")), t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
