import SocialMediaIcon from "./SocialMediaIcon";
import { socialMediaList } from "../../constants";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <ul className={styles.iconList}>
      {socialMediaList.map((handle) => {
        return <SocialMediaIcon key={handle.id} socialHandle={handle} />;
      })}
    </ul>
  );
};

export default SocialIcons;
