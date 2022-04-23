import Image from "next/image";
import SocialIcons from "../SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialIcons />
      <div className={styles.footerText}>
        <span className={styles.offsetColor}>Made with</span>&nbsp;
        <span className={styles.imageGif}>
          <Image
            src="/images/sparkling_heart.gif"
            alt="Sparkling heart"
            width={20}
            height={20}
          />
        </span>
        <span className={styles.offsetColor}>&nbsp;by</span>
        &nbsp;
        <span className={styles.author}>Tuhin Das</span>
      </div>
    </footer>
  );
};

export default Footer;
