import { SvgCode } from "@/icons/SvgCode";
import { SectionContainer } from "@/components/SectionContainer";
import { ProjectItem } from "./ProjectItem";
import { PROJECTS_DATA } from "@/constants/ProjectsData";

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <h2 className="text-2xl bold pb-8 flex gap-x-2 items-center">
        <SvgCode />
        Projects
      </h2>
      <ol className="relative   ml-4">
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
}
