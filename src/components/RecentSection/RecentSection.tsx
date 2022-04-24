import dynamic from "next/dynamic";
import Image from "next/image";
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

  const sectionEmoji =
    props.type === "BLOGS" ? "/images/writing_hand.gif" : "/images/rocket.gif";

  return (
    <Section>
      <h2 className="sectionHeading">
        Recent {props.type.toLowerCase()}&nbsp;
        <span
          className={`${styles.imageGif} ${
            props.type === "BLOGS" ? styles.writingHandGif : ""
          }`}>
          <Image
            src={sectionEmoji}
            alt="Section emoji"
            width={50}
            height={50}
          />
        </span>
      </h2>
      {props.type === "BLOGS" &&
        props.blogs.map((blog) => <BlogCard key={blog._id} post={blog} />)}

      {props.type === "PROJECTS" &&
        props.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      <div className={styles.linkContainer}>
        <Link href={seeMoreLink}>
          <a className={styles.link}>View more {props.type.toLowerCase()}</a>
        </Link>
      </div>
    </Section>
  );
};

export default RecentSection;
