import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Experience } from "@/components/ExperienceSection/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import "@/index.css";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import { lazy } from "react";
const ProjectsSection = lazy(() =>
  import("@/components/ProjectsSection/ProjectsSection").then(
    ({ default: ProjectsSection }) => ({ default: ProjectsSection })
  )
);

function App() {
  const { containerRef: headerRef, activeSection: activeHeader } =
    useElementOnScreen();
  const { containerRef: experienceRef, activeSection: activeExperience } =
    useElementOnScreen();
  const { containerRef: projectsRef, activeSection: activeProjects } =
    useElementOnScreen();
  const { containerRef: aboutRef, activeSection: activeAbout } =
    useElementOnScreen();

  const activeSections = {
    header: activeHeader,
    experience: activeExperience,
    projects: activeProjects,
    about: activeAbout,
  };

  return (
    <div
      className="bg-scroll inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "
      style={{ backgroundAttachment: "fixed" }}
    >
      <NavBar activeSection={activeSections} />
      <main className="px-4 lg:px-0">
        <Header ref={headerRef} />
        <Experience ref={experienceRef} />
        <ProjectsSection ref={projectsRef} />
        <AboutSection ref={aboutRef} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
