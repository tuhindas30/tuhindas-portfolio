import Link from "next/link";
import Section from "../Section";
import BlogCard from "../BlogCard";
import { Blog } from "../../types";
import styles from "./RecentBlogs.module.css";

interface RecentBlogsProps {
  blogs: Blog[];
}

const RecentBlogs = ({ blogs }: RecentBlogsProps) => {
  return (
    <Section>
      <h2 className={styles.heading}>Recent Blogs</h2>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} post={blog} />
      ))}
      <div className={styles.linkContainer}>
        <Link href="/blogs">
          <a className={styles.link}>See more blogs</a>
        </Link>
      </div>
    </Section>
  );
};

export default RecentBlogs;
