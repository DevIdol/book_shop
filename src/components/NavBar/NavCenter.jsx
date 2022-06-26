import SearchBar from "material-ui-search-bar";
import styles from "./NavCenter.module.css";

const NavCenter = ({ value, onChange }) => {
  return (
    <SearchBar className={styles.search} value={value} onChange={onChange} />
  );
};

export default NavCenter;
