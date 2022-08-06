import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import styles from "./Header.module.css";
import Tooltip from "@mui/material/Tooltip";
import { Fragment } from "react";

const Header = ({ title, showList, toggleShowList }) => {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <div className={styles.headerRight}>
          <span className={styles.listIcon} onClick={toggleShowList}>
            {showList ? (
              <Tooltip title="View Grid" arrow>
                <span>
                  <BsFillGrid3X3GapFill size={16} />
                </span>
              </Tooltip>
            ) : (
              <Tooltip title="View List" arrow>
                <span>
                  <FaList size={16} />
                </span>
              </Tooltip>
            )}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
