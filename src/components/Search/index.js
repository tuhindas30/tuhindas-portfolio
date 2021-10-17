import { BsSearch } from "react-icons/bs";
import Section from "../Section";
import styles from "./Search.module.css";

const Search = ({ searchTerm, onType }) => {
  return (
    <Section>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onType(e.target.value)}
          className={styles.formControl}
          placeholder="Search articles"
        />
        <span className={styles.inputGroupText}>
          <BsSearch />
        </span>
      </div>
    </Section>
  );
};

export default Search;
