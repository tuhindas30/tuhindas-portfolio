import Image from "next/image";
import Link from "next/link";
import navLogo from "./tuhindas.svg";
import styles from "./Nav.module.css";

const NavLogo = () => {
  return (
    <div className={styles.navLogo}>
      <Link href="/">
        <a>
          <Image src={navLogo} alt="navbar logo" />
        </a>
      </Link>
    </div>
  );
};

export default NavLogo;
