import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <main className={styles.introHeader}>
        <div style={{ color: "var(--primary-color)" }}>HEY THERE,</div>
        <h1>I&apos;m Tuhin 👋</h1>
        <p style={{ color: "var(--light-offset-color)", lineHeight: "2.1rem" }}>
          I&apos;m a full stack web developer who likes playing with React a
          lot. Welcome to my personal slice of the internet. I&apos;m glad you
          are here!
        </p>
        <a
          href="Tuhin_Das_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.primaryButton}>
          Resume
        </a>
      </main>
    </header>
  );
};

export default Header;
