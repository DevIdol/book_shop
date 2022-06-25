import styles from "./TopBar.module.css";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
};

export default TopBar;
