import { CgMenuGridO } from "react-icons/cg";
import styles from "./CatBar.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";
import { Fragment, useState } from "react";
import Category from "../Home/Category/Category";
const Home = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const pathNameTwo = location.pathname.split("/")[2];
  const [openMenu, setOpenMenu] = useState(false);
  const all = pathName === "book_shop";
  const MStory = pathNameTwo === "myanmar_stories";
  const MNovel = pathNameTwo === "myanmar_novels";
  const MTech = pathNameTwo === "myanmar_technologies";
  const MReligious = pathNameTwo === "myanmar_religious";
  const MyanmarBooks = MStory || MNovel || MTech || MReligious;
  const EStory = pathNameTwo === "english_stories";
  const ENovel = pathNameTwo === "english_novels";
  const ETech = pathNameTwo === "english_technologies";
  const EReligious = pathNameTwo === "english_religious";
  const EnglishBooks = EStory || ENovel || ETech || EReligious;
  const viewBook = pathNameTwo === "view_book";

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
          <Link to="/book_shop" className={styles.item}>
            Home
          </Link>
          <ArrowForwardIosIcon className={styles.icon} />
          <Link to={`/${pathName}`} className={styles.item}>
            {pathName
              ? pathName === "add-to-cart"
                ? "Shopping Cart"
                : MyanmarBooks
                ? "Myanmar Books"
                : EnglishBooks
                ? "English Books"
                : viewBook
                ? "View Book"
                : all
                ? "All"
                : pathName
              : "All"}
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
