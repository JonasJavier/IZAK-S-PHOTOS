import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider, useLang } from "./i18n";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

const SITE_NAME = "Izak's Photos";

const pageTitles = {
  "/": { en: "Portrait, Wedding & Editorial Photography", es: "Fotografía de Retrato, Bodas y Editorial" },
  "/projects": { en: "Gallery", es: "Galería" },
  "/about": { en: "About", es: "Sobre mí" },
  "/booking": { en: "Reserve a Session", es: "Reserva una Sesión" },
};

/** Scrolls to the top on page changes and keeps the tab title in sync. */
function RouteEffects() {
  const { pathname } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const title = pageTitles[pathname] ?? { en: "Page not found", es: "Página no encontrada" };
    document.title = `${t(title)} — ${SITE_NAME}`;
  }, [pathname, t]);

  return null;
}

function AppShell() {
  const { t } = useLang();

  return (
    <>
      <a className="skip-link" href="#main">
        {t({ en: "Skip to content", es: "Saltar al contenido" })}
      </a>
      <RouteEffects />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
