const Section = ({ children }) => {
  const sectionStyle = {
    padding: "0 1rem",
    marginBottom: "2rem",
  };

  return (
    <section style={sectionStyle}>
      <main>{children}</main>
    </section>
  );
};

export default Section;
