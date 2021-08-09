const ProjectTechStack = ({ name }) => {
  const stackNameStyle = {
    padding: "0.16rem 0.5rem",
    marginBottom: "0.5rem",
    backgroundColor: "var(--light-offset-color)",
    color: "var(--dark-background-color)",
    fontWeight: "bold",
    borderRadius: "10rem",
    marginRight: "0.5rem",
  };

  return <li style={stackNameStyle}>{name}</li>;
};

export default ProjectTechStack;
