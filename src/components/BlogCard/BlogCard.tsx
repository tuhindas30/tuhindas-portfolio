import Link from "next/link";
import BlogPublishDate from "../BlogPublishDate";
import { Blog } from "../../types";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: Blog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className={styles.blog}>
      <BlogPublishDate dateString={post.dateAdded} />
      <h1 className={styles.heading}>{post.title}</h1>
      <p style={{ color: "var(--light-offset-color)" }}>
        {post.brief}
        <span className={styles.blogLink}>
          <Link href={`/blogs/${post.slug}`}>
            <a style={{ color: "var(--primary-color)" }}>Read more</a>
          </Link>
        </span>
      </p>
    </article>
  );
};

export default BlogCard;
