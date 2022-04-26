import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Document from "../components/Document";
const Section = dynamic(() => import("../components/Section"));
const ProjectCard = dynamic(() => import("../components/ProjectCard"));
import { getAllProjects } from "../lib/queries";
import { Project } from "../types";
import styles from "../../styles/Projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Document
        description={"Projects by tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas | Projects"}
      />
      <header className={styles.header}>
        <h1 className="sectionHeading">Projects</h1>
        <p className={styles.message}>
          My personal projects are a way for me to set down my growth as a
          developer.
        </p>
      </header>
      <Section>
        {projects.map((project) => (
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
