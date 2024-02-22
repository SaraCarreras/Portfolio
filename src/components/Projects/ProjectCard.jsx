import styles from "./Projects.module.scss";

export function ProjectCard({ imageSrc, title, description, alt }) {
  return (
    <li>
      <img src={imageSrc} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
