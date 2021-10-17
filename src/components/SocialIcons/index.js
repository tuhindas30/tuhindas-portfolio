import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <ul className={styles.iconContainer}>
      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tuhindas30">
          <FaGithub />
        </a>
      </li>
      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/tuhindas30">
          <FaTwitter />
        </a>
      </li>
      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/tuhindas30">
          <FaLinkedin />
        </a>
      </li>

      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/tuhin.das.td">
          <FaInstagram />
        </a>
      </li>
      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/tuhin.das.td">
          <FaFacebook />
        </a>
      </li>
      <li className={styles.icon}>
        <a
          className={styles.iconLink}
          target="_blank"
          rel="noreferrer"
          href="mailto:mailme.tuhindas@gmail.com">
          <IoIosMail />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
