import styles from "./MenuBar.module.css";
import profile from "../../assets/img.jpg";

const MenuBar = ({ openMenu }) => {
  return (
    <div
      className={
        openMenu ? `${styles.menuBar} ${styles.active}` : styles.menuBar
      }
    >
      <li className={styles.account}>
        <div className={styles.profile}>
          <img className={styles.profileImg} src={profile} alt="profile" />
          <h3 className={styles.username}>Username</h3>
        </div>

        <p className={styles.userMail}>user@gmail.com</p>
      </li>
      <ul className={styles.items}>
        <li className={styles.item}>Orders</li>
        <li className={styles.item}>Login</li>
      </ul>
    </div>
  );
};

export default MenuBar;
