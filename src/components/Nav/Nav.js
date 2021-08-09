import { useState } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import navBrand from "./tuhindas.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  const [showNavLink, setShowNavLink] = useState(false);
  const router = useRouter();

  const handleNavHamburger = () => {
    setShowNavLink((state) => !state);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <Link href="/">
          <a style={{ display: "block" }}>
            <Image src={navBrand} alt="tuhindas" />
          </a>
        </Link>
      </div>
      <button
        onClick={handleNavHamburger}
        type="button"
        className={styles.navToggler}>
        <GiHamburgerMenu className={styles.navTogglerIcon} />
      </button>
      <div
        className={`${styles.navCollapse} ${showNavLink ? styles.show : ""}`}>
        <ul className={styles.navPills}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              activeClassName={styles.active}
              className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/projects"
              activeClassName={styles.active}
              className={styles.navLink}>
              Projects
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/blogs"
              activeClassName={styles.active}
              className={styles.navLink}>
              Blogs
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              activeClassName={styles.active}
              className={styles.navLink}>
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
