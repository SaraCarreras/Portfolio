import { PROJECTS_DATA } from "./ProjectsData";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <section id="core-concepts">
      <h2>Projects</h2>
      <ul>
        {PROJECTS_DATA.map((el) => {
          return (
            <ProjectCard
              imageSrc={el.src}
              alt={el.alt}
              title={el.title}
              description={el.description}
              key={el.alt}
            />
          );
        })}
      </ul>
    </section>
  );
}
