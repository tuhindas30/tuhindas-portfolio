import Stack from "./Stack";
import { myTechStack } from "../../constants";
import styles from "./MyTechStack.module.css";

const MyTechStack = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.techList}>
        {myTechStack.slice(0, 5).map((stack) => {
          return <Stack key={stack.id} stack={stack} />;
        })}
      </ul>
      <ul className={styles.techList}>
        {myTechStack.slice(5).map((stack) => {
          return <Stack key={stack.id} stack={stack} />;
        })}
      </ul>
    </div>
  );
};

export default MyTechStack;
