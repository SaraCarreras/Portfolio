import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Experience } from "@/components/ExperienceSection/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import "@/index.css";
import { lazy } from "react";
const ProjectsSection = lazy(() =>
  import("@/components/ProjectsSection/ProjectsSection").then(
    ({ default: ProjectsSection }) => ({ default: ProjectsSection })
  )
);

function App() {
  return (
    <div
      className="bg-scroll inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "
      style={{ backgroundAttachment: "fixed" }}
    >
      <NavBar />
      <main>
        <Header />
        <Experience />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
export default App;
