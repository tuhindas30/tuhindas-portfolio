import Section from "./Section";

const GetInTouchSection = () => {
  return (
    <Section>
      <h1 className="heading">Get In Touch!</h1>
      <p className="contact-text">
        Whether you have an idea for a project or just want to say hi, feel free
        to shoot me an email!
      </p>
      <a href="mailto:mailme.tuhindas@gmail.com" className="primary-button">
        Say Hello
      </a>
    </Section>
  );
};

export default GetInTouchSection;
