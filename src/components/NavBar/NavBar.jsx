import { useEffect, useState } from "react";
import {debounce} from '../../utilities/helpers'
import MenuBar from "./MenuBar";
import styles from "./NavBar.module.css";
import NavCenter from "./NavCenter";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };


  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav className={styles.navbar} style={{top: visible ? 30 : 0}}>
      <NavLeft />
      <NavCenter />
      <NavRight isOpen={toggleMenu} />
      <MenuBar openMenu={openMenu} onClose={closeMenu} />
      {openMenu && <div onClick={closeMenu} className={styles.overflow}></div>}
    </nav>
  );
};

export default NavBar;
