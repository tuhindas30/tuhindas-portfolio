import { GetStaticProps } from "next";
import { getAllProjects } from "../lib/queries";
import Document from "../components/Document";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { Project } from "../types";
import styles from "../../styles/Projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </Section>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};
