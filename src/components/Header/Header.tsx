import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.introHeader}>
      <div>
        <p className={styles.greetMessage}>Hey there,</p>
        <h1>
          I&apos;m Tuhin&nbsp;
          <Image
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            alt="waving hand"
            width={40}
            height={40}
          />
        </h1>
        <p className={styles.aboutBrief}>
          I&apos;m a full-stack web developer who loves playing with&nbsp;
          <a href="https://reactjs.org" className={styles.inlineLink}>
            React.js
          </a>
          &nbsp;a lot. Welcome to my personal slice of the internet. I&apos;m so
          glad you are here!&nbsp;
          <span className={styles.smilingGif}>
            <Image
              src="/images/smiling_face.gif"
              alt="waving hand"
              width={40}
              height={40}
            />
          </span>
        </p>
        <a
          href="Tuhin_Das_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={`button primary-button ${styles.headerButton}`}>
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
