import Image from "next/image";
import { getFormattedTimeStamp } from "../../utils";
import styles from "./BlogAuthor.module.css";

interface BlogAuthorProps {
  name: string;
  photo: string;
  publishedOn: Date;
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
          <p className={styles.authorName}>{name}</p>
          <time className={styles.publishDate}>
            {getFormattedTimeStamp(publishedOn)}
          </time>
        </div>
        <div className={styles.likesContainer}>
          <span className={styles.likes}>{likes}</span>&nbsp;
          <Image
            src="/images/sparkling_heart.gif"
            alt="Sparkling heart"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
