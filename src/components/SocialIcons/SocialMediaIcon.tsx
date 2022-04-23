import { SocialMedia } from "../../types";
import styles from "./SocialIcons.module.css";

interface SocialMediaIconProps {
  socialHandle: SocialMedia;
}

const SocialMediaIcon = ({ socialHandle }: SocialMediaIconProps) => {
  const Icon = socialHandle.icon;
  return (
    <li className={styles.iconItem}>
      <a
        href={socialHandle.link}
        target="_blank"
        rel="noreferrer"
        className={styles.iconLink}>
        <Icon className={styles.icon} />
      </a>
    </li>
  );
};

export default SocialMediaIcon;
