import { getAllProjects } from "../../lib/queries";
import Document from "../../components/Document";
import Card from "../../components/Card";
import Section from "../../components/Section";
import styles from "./Projects.module.css";

export const getStaticProps = async () => {
  const data = await getAllProjects();

  return {
    props: {
      projects: data.projects,
    },
  };
};

const Projects = ({ projects }) => {
  const sortedProjects = projects.map((item) => item).reverse();

  return (
    <>
      <Document
        description={"Projects by tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas | Projects"}
      />
      <header className={styles.header}>
        <h1>Projects</h1>
        <p style={{ color: "var(--light-offset-color)" }}>
          My personal projects are a way for me to set down my growth as a
          developer.
        </p>
      </header>
      <Section>
        {sortedProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </Section>
    </>
  );
};

export default Projects;
