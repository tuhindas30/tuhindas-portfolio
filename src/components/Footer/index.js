import SocialIcons from "../SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialIcons />
      <div className={styles.footerText}>
        <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Made with</span> ❤️
        <span
          style={{ color: "rgba(255, 255, 255, 0.5)", marginLeft: "0.3rem" }}>
          by
        </span>
        <span className={styles.author}>Tuhin Das</span>
      </div>
    </footer>
  );
};

export default Footer;
