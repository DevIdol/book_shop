import styles from "./MenuBar.module.css";
import profile from "../../assets/img.jpg";
import { Link, NavLink } from "react-router-dom";

const MenuBar = ({ openMenu, onClose }) => {
  return (
    <div
      className={
        openMenu ? `${styles.menuBar} ${styles.active}` : styles.menuBar
      }
    >
      <div className={styles.account}>
        <Link onClick={onClose} to="/account" className={styles.profile}>
          <img className={styles.profileImg} src={profile} alt="profile" />
          <div className={styles.profileRight}>
            <h3 className={styles.username}>Username</h3>
            <p className={styles.userMail}>phyotheinttheintkyaw@gmail.com</p>
          </div>
        </Link>
        <Link onClick={onClose} to="/account" className={styles.manageAccount}>
          Manage Account
        </Link>
      </div>
      <ul className={styles.items}>
        <NavLink
          onClick={onClose}
          style={({ isActive }) => {
            return {
              width: isActive && "100%",
              textAlign: isActive && "center",
              color: isActive && "#000",
              fontWeight: isActive && "bold",
              backgroundColor: isActive && "#f1f3f4",
              borderRadius: isActive && "10px",
            };
          }}
          to="/orders"
          className={styles.item}
        >
          Orders
        </NavLink>
        <NavLink
          onClick={onClose}
          style={({ isActive }) => {
            return {
              width: isActive && "100%",
              textAlign: isActive && "center",
              color: isActive && "#000",
              fontWeight: isActive && "bold",
              backgroundColor: isActive && "#f1f3f4",
              borderRadius: isActive && "10px",
            };
          }}
          to="/login"
          className={styles.item}
        >
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default MenuBar;
