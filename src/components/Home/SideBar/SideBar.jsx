import Category from "../Category/Category";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Category />
    </div>
  );
};

export default SideBar;
