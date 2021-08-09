import Head from "next/head";
import Image from "next/image";
import Section from "../../components/Section";
import SocialIcons from "../../components/SocialIcons";

const About = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6cff5a" />
        <meta name="description" content="About tuhindas" />
        <meta name="keywords" content="Portfolio, Next.js, GraphQL, Apollo" />
        <meta name="author" content="Tuhin Das" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="tuhindas | About" />
        <meta property="og:url" content="https://tuhindas.me" />
        <meta property="og:description" content="About tuhindas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/cSlF4tn.jpg" />
        <title>tuhindas | About</title>
      </Head>
      <header>
        <main className="main">
          <h1>About Me</h1>
          <div className="image-container">
            <Image
              src="/images/tuhindas.jpg"
              alt="image of tuhindas"
              className="image"
              width={200}
              height={200}
            />
          </div>
          <div className="about-intro">
            <h2>Tuhin Das</h2>
            <div className="light-offset-color">Full Stack Developer</div>
            <SocialIcons />
          </div>
        </main>
      </header>
      <Section>
        <p>
          Hello! I&apos;m Tuhin, a full stack developer based in Kolkata,
          India🍁.
        </p>
        <p>
          I’m a self-taught full stack web developer who loves to work on React.
        </p>
        <p>
          When I’m not in front of a computer screen, I am probably playing my
          guitar, exploring Tagore or Indian Classical Music.
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul className="tech-list">
          <li className="tech-list-item">▸ React</li>
          <li className="tech-list-item">▸ NodeJS</li>
          <li className="tech-list-item">▸ Express</li>
          <li className="tech-list-item">▸ MongoDB</li>
          <li className="tech-list-item">▸ React-Redux</li>
          <li className="tech-list-item">▸ Next.js</li>
          <li className="tech-list-item">▸ TypeScript</li>
          <li className="tech-list-item">▸ JavaScript</li>
          <li className="tech-list-item">▸ Firebase</li>
          <li className="tech-list-item">▸ GraphQL</li>
        </ul>
      </Section>
    </>
  );
};

export default About;
