import Image from "next/image";
import SocialIcons from "../../components/SocialIcons";
import MyImage from "../../../public/images/tuhindas.jpg";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className="sectionHeading">About Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={MyImage}
              alt="image of tuhindas"
              className={styles.image}
            />
          </div>
          <div className={styles.intro}>
            <h2>Tuhin Das</h2>
            {/* <p className={styles.description}>
              <span>Frontend Developer</span>&nbsp;
              <a
                href="https://tknz.gg"
                target="_blank"
                rel="noreferrer"
                className="link">
                @TKNZ
              </a>
            </p> */}
            <p className={styles.description}>
              Full Stack JavaScript Developer
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
