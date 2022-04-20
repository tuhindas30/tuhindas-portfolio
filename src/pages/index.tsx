import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllBlogs, getAllProjects } from "../lib/queries";
import Document from "../components/Document";
import Card from "../components/Card";
import Header from "../components/Header";
import Section from "../components/Section";
import BlogCard from "../components/BlogCard";
import { Project, Blog } from "../types";
import styles from "../../styles/Home.module.css";

interface HomeProps {
  projects: Project[];
  blogs: Blog[];
}

const Home = ({ projects, blogs }: HomeProps) => {
  const recentProjects = projects
    .map((item) => item)
    .reverse()
    .slice(0, 2);

  const recentBlogs = blogs.map((item) => item).slice(0, 2);

  return (
    <>
      <Document
        description={"Homepage of tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas"}
      />
      <Header />
      <Section>
        <h1 className={styles.heading}>Recent Blogs</h1>
        {recentBlogs.map((blog) => (
          <BlogCard key={blog._id} post={blog} />
        ))}
        <div style={{ textAlign: "center" }}>
          <Link href="/blogs">
            <a className={styles.link}>More Blogs</a>
          </Link>
        </div>
      </Section>
      <Section>
        <h1 className={styles.heading}>Recent Projects</h1>
        {recentProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
        <div style={{ textAlign: "center" }}>
          <Link href="/projects">
            <a className={styles.link}>More Projects</a>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const [{ projects }, { user }] = await Promise.all([
    getAllProjects(),
    getAllBlogs(),
  ]);

  return {
    props: {
      projects,
      blogs: user.publication.posts,
    },
  };
};
