import { useState } from "react";
import MenuBar from "./MenuBar";
import styles from "./NavBar.module.css";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <nav className={styles.navbar}>
      <NavLeft />
      <NavCenter />
      <NavRight isOpen={toggleMenu} />
      <MenuBar openMenu={openMenu} />
      {openMenu && <div onClick={closeMenu} className={styles.overflow}></div>}
    </nav>
  );
};

export default NavBar;
