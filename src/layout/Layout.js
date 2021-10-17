import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetInTouchSection from "../components/GetInTouchSection";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.wrapper}>{children}</main>
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
