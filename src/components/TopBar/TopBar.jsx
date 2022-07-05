import { useEffect, useState } from "react";
import { debounce } from "../../utilities/helpers";
import styles from "./TopBar.module.css";
import TopBarLeft from "./TopBarLeft";
import TopBarRight from "./TopBarRight";

const TopBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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
    <div className={styles.topBar} style={{top: visible ? 0 : -30}}>
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
};

export default TopBar;
