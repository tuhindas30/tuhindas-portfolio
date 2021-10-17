import Section from "../Section";
import styles from "./GetInTouchSection.module.css";

const GetInTouchSection = () => {
  return (
    <Section>
      <h1 className={styles.heading}>Get In Touch!</h1>
      <p>
        Whether you have an idea for a project or just want to say hi, feel free
        to shoot me an email!
      </p>
      <a
        href="mailto:mailme.tuhindas@gmail.com"
        className={styles.primaryButton}>
        Say Hello
      </a>
    </Section>
  );
};

export default GetInTouchSection;
