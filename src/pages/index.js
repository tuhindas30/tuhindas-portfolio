import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Section from "../components/Section";
import { getProjects } from "../queries";

export const getStaticProps = async () => {
  const data = await getProjects();

  return {
    props: {
      projects: data.projects,
    },
  };
};

const Home = ({ projects }) => {
  const recentProjects = projects
    .map((item) => item)
    .reverse()
    .slice(0, 2);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6cff5a" />
        <meta name="description" content="Homepage of tuhindas" />
        <meta name="keywords" content="Portfolio, Next.js, GraphQL, Apollo" />
        <meta name="author" content="Tuhin Das" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="tuhindas" />
        <meta property="og:url" content="https://tuhindas.me" />
        <meta property="og:description" content="Homepage of tuhindas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/cSlF4tn.jpg" />
        <title>tuhindas</title>
      </Head>
      <Header />
      <Section>
        <h1 className="heading">Recent Projects</h1>
        {recentProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
        <div style={{ textAlign: "center" }}>
          <Link href="/projects">
            <a className="project-link">More Projects</a>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Home;
