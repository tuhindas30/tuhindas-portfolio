import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

const Section = ({ children }: PropsWithChildren<{}>) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
