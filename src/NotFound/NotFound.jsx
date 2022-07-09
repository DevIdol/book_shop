import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <span>404</span>
      <div className={styles.divider}></div>
      <span className={styles.content}>The Result Not Found!</span>
    </div>
  );
};

export default NotFound;
