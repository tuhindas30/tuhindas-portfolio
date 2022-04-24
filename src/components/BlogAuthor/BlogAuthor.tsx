import Image from "next/image";
import BlogPublishDate from "../BlogPublishDate";
import styles from "./BlogAuthor.module.css";

interface BlogAuthorProps {
  name: string;
  photo: string;
  publishedOn: string;
  likes: number;
}

const BlogAuthor = ({ name, photo, publishedOn, likes }: BlogAuthorProps) => {
  return (
    <div className={styles.authorBar}>
      <Image
        src={photo}
        alt={name}
        width={60}
        height={60}
        className={styles.authorPhoto}
      />
      <div className={styles.authorDetails}>
        <div>
          <div>{name}</div>
          <BlogPublishDate dateString={publishedOn} />
        </div>
        <div>
          <span className="light-offset-color">{likes}</span> 💖
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;