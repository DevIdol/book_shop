import styles from "./NavRight.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
const NavRight = ({ isOpen }) => {
  return (
    <ul className={styles.navRight}>
      <li className={`${styles.item} ${styles.login}`}>Login</li>
      <li className={`${styles.item} ${styles.orders}`}>Orders</li>
      <li className={styles.item}>
        <AddShoppingCartIcon />
      </li>
      <li className={`${styles.item} ${styles.menu}`} onClick={isOpen}>
        <MenuIcon />
      </li>
    </ul>
  );
};

export default NavRight;
