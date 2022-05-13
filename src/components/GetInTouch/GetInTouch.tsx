import Image from "next/image";
import Section from "../Section";
import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <Section>
      <h2 className="sectionHeading">
        Get In Touch!&nbsp;
        <span className={styles.imageGif}>
          <Image
            src="/images/handshake.gif"
            alt="handshake"
            width={50}
            height={50}
          />
        </span>
      </h2>
      <p className={styles.message}>
        Whether you have an idea for a project or just want to say hi, feel free
        to shoot me an email!&nbsp;
        <span className={`${styles.imageGif} ${styles.dartGif}`}>
          <Image
            src="/images/dart_hit.gif"
            alt="Dart hit"
            width={40}
            height={40}
          />
        </span>
      </p>
      <a
        href="mailto:contact@tuhindas.dev"
        className={`button primary-button ${styles.button}`}>
        Say Hello
      </a>
    </Section>
  );
};

export default GetInTouch;
