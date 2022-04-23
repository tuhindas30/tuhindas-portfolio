import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

interface ProjectLinksProps {
  repo: string;
  demo: string;
}

const ProjectLinks = ({ repo, demo }: ProjectLinksProps) => {
  return (
    <ul className={styles.listContainer}>
      <li className={styles.listItem}>
        <a href={repo} target="_blank" rel="noreferrer" className={styles.link}>
          <FaGithub className={styles.icon} />
          <span>View Source Code</span>
        </a>
      </li>
      <li className={styles.listItem}>
        <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
          <FaLink className={styles.icon} />
          <span>View Live Demo</span>
        </a>
      </li>
    </ul>
  );
};

export default ProjectLinks;
