import Image from "next/image";
import styles from "../../styles/404.module.css";

const Error404 = () => {
  return (
    <div className={styles.errorMsgContainer}>
      <Image
        src="/images/error404.svg"
        alt="404 not found"
        width={400}
        height={400}
      />
      <h2 className={styles.heading}>YOU SEEM LOST</h2>
    </div>
  );
};
export default Error404;
