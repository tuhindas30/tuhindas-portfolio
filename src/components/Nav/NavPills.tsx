import NavLink from "../NavLink";
import { navPills } from "../../constants";
import styles from "./Nav.module.css";

interface NavPillsProps {
  isHamMenuOpen: boolean;
  onPillClick: () => void;
}

const NavPills = ({ isHamMenuOpen, onPillClick }: NavPillsProps) => {
  return (
    <ul
      className={`${styles.navPills} ${isHamMenuOpen ? styles.active : ""}`}
      onClick={onPillClick}>
      {navPills.map((pill) => (
        <li key={pill.id} className={styles.navItem}>
          <NavLink
            to={pill.path}
            activeClassName={styles.active}
            className={styles.navLink}>
            {pill.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavPills;
