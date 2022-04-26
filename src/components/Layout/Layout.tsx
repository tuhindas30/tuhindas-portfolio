import { PropsWithChildren } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import GetInTouchSection from "../GetInTouch";
import styles from "./Layout.module.css";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.wrapper}>{children}</main>
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
