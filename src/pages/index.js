import Link from "next/link";
import { getAllBlogs, getAllProjects } from "../lib/queries";
import Document from "../components/Document";
import Card from "../components/Card";
import Header from "../components/Header";
import Section from "../components/Section";
import styles from "./Home.module.css";
import BlogCard from "../components/BlogCard";

export const getStaticProps = async () => {
  const { projects } = await getAllProjects();
  const { user } = await getAllBlogs();

  return {
    props: {
      projects,
      blogs: user.publication.posts,
    },
  };
};

const Home = ({ projects, blogs }) => {
  const recentProjects = projects
    .map((item) => item)
    .reverse()
    .slice(0, 2);

  const recentBlogs = blogs
    .map((item) => item)
    .reverse()
    .slice(0, 2);

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
