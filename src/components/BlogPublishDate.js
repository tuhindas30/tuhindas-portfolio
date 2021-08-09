const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BlogPublishDate = ({ dateString }) => {
  const dateStyle = {
    color: "var(--light-offset-color)",
    fontSize: "0.9rem",
  };

  const dateToMonDDYYYY = (dateString) => {
    const date = new Date(dateString);
    const d = date.getDate();
    const mon = date.getMonth();
    const dd = d < 10 ? "0" + d : d;
    const yyyy = date.getFullYear();
    return `${shortMonths[mon]} ${dd}, ${yyyy}`;
  };

  return <div style={dateStyle}>{dateToMonDDYYYY(dateString)}</div>;
};

export default BlogPublishDate;
