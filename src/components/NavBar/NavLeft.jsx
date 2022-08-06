import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./NavLeft.module.css";

const NavLeft = () => {
  return (
    <Link to="/book_shop">
      <Tooltip title="Online Book Shop" arrow>
        <h1 className={styles.logo}>𝓞𝓑𝓢</h1>
      </Tooltip>
    </Link>
  );
};

export default NavLeft;
