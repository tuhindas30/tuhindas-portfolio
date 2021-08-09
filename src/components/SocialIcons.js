import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const SocialIcons = () => {
  const iconContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem auto",
    listStyle: "none",
    fontSize: "1.5rem",
  };

  return (
    <ul style={iconContainerStyle}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tuhindas30">
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/tuhindas30">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/tuhindas30">
          <FaLinkedin />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/tuhin.das.td">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/tuhin.das.td">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:mailme.tuhindas@gmail.com">
          <IoIosMail />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
