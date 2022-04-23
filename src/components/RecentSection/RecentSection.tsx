import dynamic from "next/dynamic";
import Link from "next/link";
import Section from "../Section";
const BlogCard = dynamic(() => import("../BlogCard"));
const ProjectCard = dynamic(() => import("../ProjectCard"));
import { Blog, Project } from "../../types";
import styles from "./RecentSection.module.css";

interface RecentBlogs {
  type: "BLOGS";
  blogs: Blog[];
}

interface RecentProjects {
  type: "PROJECTS";
  projects: Project[];
}

type RecentSectionProps = RecentBlogs | RecentProjects;

const RecentSection = (props: RecentSectionProps) => {
  const seeMoreLink = props.type === "BLOGS" ? "/blogs" : "/projects";
  return (
    <Section>
      <h2 className={styles.heading}>Recent {props.type.toLowerCase()}</h2>
      {props.type === "BLOGS" &&
        props.blogs.map((blog) => <BlogCard key={blog._id} post={blog} />)}

      {props.type === "PROJECTS" &&
        props.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      <div className={styles.linkContainer}>
        <Link href={seeMoreLink}>
          <a className={styles.link}>See more {props.type.toLowerCase()}</a>
        </Link>
      </div>
    </Section>
  );
};

export default RecentSection;
