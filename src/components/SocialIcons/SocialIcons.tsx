import SocialMediaIcon from "./SocialMediaIcon";
import { socialHandles } from "../../constants";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <ul className={styles.iconList}>
      {socialHandles.map((handle) => {
        return <SocialMediaIcon key={handle.id} socialHandle={handle} />;
      })}
    </ul>
  );
};

export default SocialIcons;
