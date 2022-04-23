import { TechStack } from "../../types";
import styles from "./ProjectCard.module.css";

interface ProjectTechStackProps {
  techStack: TechStack[];
}

const ProjectTechStack = ({ techStack }: ProjectTechStackProps) => {
  return (
    <ul className={styles.techStack}>
      {techStack.map((stack) => (
        <li key={stack.id} className={styles.stackName}>
          {stack.name}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTechStack;
