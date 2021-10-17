import Image from "next/image";
import Document from "../../components/Document";
import Section from "../../components/Section";
import SocialIcons from "../../components/SocialIcons";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Document
        description={"About tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas | About"}
      />
      <header className={styles.header}>
        <h1>About Me</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/images/tuhindas.jpg"
            alt="image of tuhindas"
            className={styles.image}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.intro}>
          <h2>Tuhin Das</h2>
          <div style={{ color: "var(--light-offset-color)" }}>
            <span>Building frontend</span>
            <a
              href="https://tknz.gg"
              target="_blank"
              rel="noreferrer"
              className={styles.link}>
              @TKNZ
            </a>
          </div>
          <div style={{ color: "var(--light-offset-color)" }}>
            Full Stack JavaScript Developer
          </div>
          <SocialIcons />
        </div>
      </header>
      <Section>
        <p>
          Hello! I&apos;m Tuhin, a full stack developer based in Kolkata, India
          &#x1F1EE;&#x1F1F3;.
        </p>
        <p>
          I’m a self-taught full stack web developer who loves to work on React.
        </p>
        <p>
          When I’m not in front of a computer screen, I am probably playing my
          guitar, exploring Tagore or Indian Classical Music.
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul className={styles.techList}>
          <li className={styles.techListItem}>▸ React</li>
          <li className={styles.techListItem}>▸ NodeJS</li>
          <li className={styles.techListItem}>▸ Express</li>
          <li className={styles.techListItem}>▸ MongoDB</li>
          <li className={styles.techListItem}>▸ React-Redux</li>
          <li className={styles.techListItem}>▸ Next.js</li>
          <li className={styles.techListItem}>▸ TypeScript</li>
          <li className={styles.techListItem}>▸ JavaScript</li>
          <li className={styles.techListItem}>▸ Firebase</li>
          <li className={styles.techListItem}>▸ GraphQL</li>
        </ul>
      </Section>
    </>
  );
};

export default About;
