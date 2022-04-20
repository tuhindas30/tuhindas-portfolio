import styles from "./ProjectTechStack.module.css";

interface ProjectTechStackProps {
  name: string;
}

const ProjectTechStack = ({ name }: ProjectTechStackProps) => {
  return <li className={styles.stackName}>{name}</li>;
};

export default ProjectTechStack;
