import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <p>404</p>
      <div className={styles.divider}></div>
      <p className={styles.content}>The Result Not Found!</p>
    </div>
  );
};

export default NotFound;
