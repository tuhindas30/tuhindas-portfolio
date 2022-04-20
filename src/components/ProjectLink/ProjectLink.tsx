import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./ProjectLink.module.css";

interface ProjectLinkProps {
  repo: string;
  demo: string;
}

const ProjectLink = ({ repo, demo }: ProjectLinkProps) => {
  return (
    <ul className={styles.link}>
      <li style={{ marginRight: "1rem" }}>
        <a href={repo} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li style={{ marginRight: "1rem" }}>
        <a href={demo} target="_blank" rel="noreferrer">
          <FaLink />
        </a>
      </li>
    </ul>
  );
};

export default ProjectLink;
