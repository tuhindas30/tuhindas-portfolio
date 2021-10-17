import styles from "./BlogPublishDate.module.css";

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

const dateToMonDDYYYY = (dateString) => {
  const date = new Date(dateString);
  const d = date.getDate();
  const mon = date.getMonth();
  const dd = d < 10 ? "0" + d : d;
  const yyyy = date.getFullYear();
  return `${shortMonths[mon]} ${dd}, ${yyyy}`;
};

const BlogPublishDate = ({ dateString }) => {
  return (
    <time dateTime={dateToMonDDYYYY(dateString)} className={styles.date} />
  );
};

export default BlogPublishDate;
