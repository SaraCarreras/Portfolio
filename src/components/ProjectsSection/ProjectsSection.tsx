import { SvgCode } from "@/icons/SvgCode";
import { SectionContainer } from "@/components/SectionContainer";
import { ProjectItem } from "./ProjectItem";
import { PROJECTS_DATA } from "@/components/ProjectsSection/ProjectsData";

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <h2 className="text-3xl font-semibold flex gap-x-2 items-center">
        <SvgCode />
        Projects
      </h2>
      <ol className="relative   ">
        {PROJECTS_DATA.map((project) => {
          return (
            <li key={project.preview}>
              <ProjectItem {...project} />
            </li>
          );
        })}
      </ol>
    </SectionContainer>
  );
};
export default ProjectsSection;
