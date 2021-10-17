import Image from "next/image";
import ProjectTechStack from "../ProjectTechStack";
import ProjectLink from "../ProjectLink";
import styles from "./Card.module.css";

const Card = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.imageURL}
        alt={project.title}
        width={1080}
        height={607}
        className={styles.image}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{project.title}</h2>
        <p className={styles.cardText}>{project.shortDescription}</p>
        <ul className={styles.cardFooter}>
          {project.techStack.map((stack) => (
            <ProjectTechStack key={stack.id} name={stack.name} />
          ))}
        </ul>
        <ProjectLink repo={project.repoURL} demo={project.liveDemoURL} />
      </div>
    </div>
  );
};

export default Card;
