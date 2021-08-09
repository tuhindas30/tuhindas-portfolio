import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <main className={styles.introHeader}>
        <div className="primary-color">HEY THERE,</div>
        <h1>I&apos;m Tuhin 👋</h1>
        <p className="light-offset-color">
          I&apos;m a full stack web developer who likes playing with React a
          lot. Welcome to my personal slice of the internet. I&apos;m glad you
          are here!
        </p>
        <a
          href="Tuhin's Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="primary-button">
          Resume
        </a>
      </main>
    </header>
  );
};

export default Header;
