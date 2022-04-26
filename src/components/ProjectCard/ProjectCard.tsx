import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import { Project } from "../../types";
import styles from "./ProjectCard.module.css";
import ProjectTechStack from "./ProjectTechStack";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.imageURL}
        alt={project.title}
        width={1366}
        height={768}
        className={styles.image}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardText}>{project.shortDescription}.</p>
        <ProjectTechStack techStack={project.techStack} />
        <ProjectLinks repo={project.repoURL} demo={project.liveDemoURL} />
      </div>
    </div>
  );
};

export default Card;
