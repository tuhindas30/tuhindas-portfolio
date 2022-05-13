import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SocialHandles } from "../types";

const socialHandles: SocialHandles[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/tuhindas30",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://twitter.com/tuhindas30",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/tuhindas30",
    icon: FaLinkedin,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com/tuhindas.dev",
    icon: FaInstagram,
  },
  {
    id: 5,
    name: "Facebook",
    link: "https://facebook.com/tuhindas.dev",
    icon: FaFacebook,
  },
  {
    id: 6,
    name: "Email",
    link: "mailto:contact@tuhindas.dev",
    icon: IoIosMail,
  },
];

export default socialHandles;
