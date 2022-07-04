import { CgMenuGridO } from "react-icons/cg";
import styles from "./CatBar.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Category from "../Home/Category/Category";
const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Fragment>
      <div className={styles.catBar}>
        <div className={styles.category}>
          <span onClick={toggleMenu} className={styles.cat}>
            <CgMenuGridO size={20} />
            <span>Categories</span>
          </span>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.items}>
          <Link to="/" className={styles.item}>
            Home
          </Link>
          <ArrowForwardIosIcon className={styles.icon} />
          <Link to="/" className={styles.item}>
            All
          </Link>
        </div>
      </div>
      <div
        className={
          openMenu ? `${styles.sideBar} ${styles.active}` : styles.sideBar
        }
      >
        <Category onClose={closeMenu} />
      </div>
      {openMenu && <div onClick={closeMenu} className={styles.overflow}></div>}
    </Fragment>
  );
};

export default Home;
