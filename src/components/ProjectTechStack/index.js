import styles from "./ProjectTechStack.module.css";

const ProjectTechStack = ({ name }) => {
  return <li className={styles.stackName}>{name}</li>;
};

export default ProjectTechStack;
