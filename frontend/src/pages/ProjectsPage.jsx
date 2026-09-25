import ProjectGallery from "../components/ProjectGallery";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n";

function ProjectsPage() {
  const { t } = useLang();

  return (
    <>
      <section className="page-hero">
        <Reveal className="page-hero-copy">
          <span className="section-label">{t({ en: "The Gallery", es: "La Galería" })}</span>
          <h1>{t({ en: "A living archive of light, people, and places.", es: "Un archivo vivo de luz, personas y lugares." })}</h1>
          <p>
            {t({
              en: "Filter by portraits, editorial, weddings, or travel — then open any frame into a focused, full-screen viewer. Use the arrow keys to move through the set.",
              es: "Filtra por retratos, editorial, bodas o viajes, y abre cualquier imagen en un visor a pantalla completa. Usa las flechas del teclado para navegar.",
            })}
          </p>
        </Reveal>
      </section>

      <section className="section-shell gallery-section">
        <ProjectGallery />
      </section>
    </>
  );
}

export default ProjectsPage;
