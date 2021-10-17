import Link from "next/link";
import Section from "../Section";
import BlogPublishDate from "../BlogPublishDate";
import styles from "./BlogCard.module.css";

const BlogCard = ({ post }) => {
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
