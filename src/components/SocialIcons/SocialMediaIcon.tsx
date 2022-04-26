import { SocialHandles } from "../../types";
import styles from "./SocialIcons.module.css";

interface SocialMediaIconProps {
  socialHandle: SocialHandles;
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
