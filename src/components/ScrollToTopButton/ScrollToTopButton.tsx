import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
      return;
    }
    setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`${styles.scrollBtn} ${isVisible ? styles.show : styles.hide}`}
      onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
