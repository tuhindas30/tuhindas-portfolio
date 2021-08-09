import { FaGithub, FaLink } from "react-icons/fa";

const ProjectLink = ({ repo, demo }) => {
  const cardLinkStyle = {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    fontSize: "1.5rem",
  };

  const cardLinkItemStyle = {
    marginRight: "1rem",
  };

  return (
    <ul style={cardLinkStyle}>
      <li style={cardLinkItemStyle}>
        <a href={repo} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li style={cardLinkItemStyle}>
        <a href={demo} target="_blank" rel="noreferrer">
          <FaLink />
        </a>
      </li>
    </ul>
  );
};

export default ProjectLink;
