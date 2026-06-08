import ProjectGallery from "../components/ProjectGallery";
import Reveal from "../components/Reveal";

function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <Reveal className="page-hero-copy">
          <span className="section-label">The Gallery</span>
          <h1>A living archive of light, people, and places.</h1>
          <p>
            Filter by portraits, editorial, weddings, or travel — then open any frame into a focused, full-screen
            viewer. Use the arrow keys to move through the set.
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
