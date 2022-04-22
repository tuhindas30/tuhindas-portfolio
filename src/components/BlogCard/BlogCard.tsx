import Link from "next/link";
import { getFormattedTimeStamp } from "../../utils";
import { Blog } from "../../types";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: Blog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className={styles.card}>
      <time className={styles.date}>
        {getFormattedTimeStamp(post.dateAdded)}
      </time>
      <h3 className={styles.heading}>{post.title}</h3>
      <p className={styles.brief}>
        {post.brief}
        <Link href={`/blogs/${post.slug}`}>
          <a className={styles.link}>Read more</a>
        </Link>
      </p>
    </article>
  );
};

export default BlogCard;
