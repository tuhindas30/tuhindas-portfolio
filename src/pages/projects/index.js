import Head from "next/head";
import Card from "../../components/Card/Card";
import Section from "../../components/Section";
import { getProjects } from "../../queries";

export const getStaticProps = async () => {
  const data = await getProjects();

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
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6cff5a" />
        <meta name="description" content="Projects by tuhindas" />
        <meta name="keywords" content="Portfolio, Next.js, GraphQL, Apollo" />
        <meta name="author" content="Tuhin Das" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="tuhindas | Projects" />
        <meta property="og:url" content="https://tuhindas.me" />
        <meta property="og:description" content="Projects by tuhindas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/cSlF4tn.jpg" />
        <title>tuhindas | Projects</title>
      </Head>
      <header>
        <main className="main">
          <h1>Projects</h1>
          <p className="light-offset-color">
            My personal projects are a way for me to set down my growth as a
            developer.
          </p>
        </main>
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
