import { BsSearch } from "react-icons/bs";
import Section from "../Section";
import styles from "./Search.module.css";

interface SearchProps {
  searchTerm: string;
  onType: (value: string) => void;
}

const Search = ({ searchTerm, onType }: SearchProps) => {
  return (
    <Section>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onType(e.target.value)}
          className={styles.formControl}
          placeholder="Search blogs"
        />
        <BsSearch className={styles.searchIcon} />
      </div>
    </Section>
  );
};

export default Search;
