import { useState } from "react";
import NavLogo from "./NavLogo";
import NavPills from "./NavPills";
import HamburgerIcon from "./HamburgerIcon";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <NavLogo />
      <NavPills isHamMenuOpen={isHamMenuOpen} />
      <HamburgerIcon
        isHamMenuOpen={isHamMenuOpen}
        onHamMenuOpen={() => setIsHamMenuOpen((state) => !state)}
      />
    </nav>
  );
};

export default Nav;
