import dynamic from "next/dynamic";
import Image from "next/image";
import Document from "../components/Document";
const Section = dynamic(() => import("../components/Section"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));
const MyTechStack = dynamic(() => import("../components/MyTechStack"));
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <>
      <Document
        description={"About tuhindas"}
        image={"https://i.imgur.com/cSlF4tn.jpg"}
        title={"tuhindas | About"}
      />
      <AboutHeader />
      <Section>
        <p className={styles.description}>
          Hello! I&apos;m Tuhin, a self-taught full stack web developer from
          West Bengal, India &nbsp;
          <span className={styles.flagGif}>
            <Image
              src="/images/india_flag.gif"
              alt="India flag"
              width={289}
              height={192}
            />
          </span>
          <br />
          <br />
          {/* Currently, I&apos;m working at&nbsp;
          <a
            href="https://tknz.gg"
            target="_blank"
            rel="noreferrer"
            className="link">
            TKNZ
          </a>
          &nbsp; as a frontend engineer. Here, in my job, I design layouts,
          solve logical problems and perform optimizations.
          <br />
          <br /> */}
          I started my web development journey back in 2020 with&nbsp;
          <a
            href="https://neog.camp"
            target="_blank"
            rel="noreferrer"
            className="link">
            neogcamp
          </a>
          , a web development bootcamp by&nbsp;
          <a
            href="https://tanaypratap.com"
            target="_blank"
            rel="noreferrer"
            className="link">
            Tanay Pratap
          </a>
          , and successfully developed five full-stack projects using React.js
          and other stacks.
          <br />
          <br />
          When I&apos;m not coding, I may be probably reading books, playing
          computer games or playing guitar.
          <br />
          <br />
          Here are a few technologies I&apos;ve worked with:
          <br />
          <br />
        </p>
        <MyTechStack />
      </Section>
    </>
  );
};

export default About;
