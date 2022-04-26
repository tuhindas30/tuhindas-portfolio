import { SocialHandles as Stack } from "../../types";
import styles from "./MyTechStack.module.css";

interface StackProps {
  stack: Stack;
}

const Stack = ({ stack }: StackProps) => {
  const Icon = stack.icon;
  return (
    <li className={styles.stackItem}>
      {stack.link ? (
        <a
          href={stack.link}
          target="_blank"
          rel="noreferrer"
          className={`link ${styles.link}`}>
          <span>
            ▸ <span className={styles.stackName}>{stack.name}</span>
          </span>
          &nbsp;
          <Icon className={styles.icon} />
        </a>
      ) : (
        <span className={styles.noLink}>
          <span>▸ {stack.name}</span> <Icon className={styles.icon} />
        </span>
      )}
    </li>
  );
};

export default Stack;
