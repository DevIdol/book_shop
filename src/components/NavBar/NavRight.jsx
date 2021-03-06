import styles from "./NavRight.module.css";
import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
const NavRight = ({ isOpen }) => {
  return (
    <ul className={styles.navRight}>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "#fff",
            fontWeight: isActive && "bold",
          };
        }}
        to="/login"
        className={`${styles.item} ${styles.login}`}
      >
        Login
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "#fff",
            fontWeight: isActive && "bold",
          };
        }}
        to="/orders"
        className={`${styles.item} ${styles.orders}`}
      >
        Orders
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "#fff",
            fontWeight: isActive && "bold",
          };
        }}
        to="/contact"
        className={`${styles.item} ${styles.orders}`}
      >
        Contact
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "#fff",
            fontWeight: isActive && "bold",
          };
        }}
        to="/add-to-cart"
        className={styles.item}
      >
        <Badge color="error" className={styles.badge} badgeContent={10}>
          <AddShoppingCartIcon className={styles.cart} />
        </Badge>
      </NavLink>
      <li className={`${styles.item} ${styles.menu}`} onClick={isOpen}>
        <MenuIcon />
      </li>
    </ul>
  );
};

export default NavRight;
