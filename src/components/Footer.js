import SocialIcons from "./SocialIcons";

const Footer = () => {
  const footerStyle = {
    padding: "1rem 0",
  };

  const footerTextStyle = {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.5)",
  };

  return (
    <footer style={footerStyle}>
      <SocialIcons />
      <div style={footerTextStyle}>
        Made with ❤️ by
        <span style={{ color: "var(--primary-color)", marginLeft: "0.5rem" }}>
          Tuhin Das
        </span>
      </div>
    </footer>
  );
};

export default Footer;
