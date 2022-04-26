import styles from "./Nav.module.css";

interface HamburgerIconProps {
  isHamMenuOpen: boolean;
  onHamMenuOpen: () => void;
}

const HamburgerIcon = ({
  isHamMenuOpen,
  onHamMenuOpen,
}: HamburgerIconProps) => {
  return (
    <button
      onClick={onHamMenuOpen}
      className={`${styles.hamburgerIcon} ${
        isHamMenuOpen ? styles.active : ""
      }`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerIcon;
