import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import styles from "./TopBarRight.module.css";

const Facebook = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Telegram = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const TopBarRight = () => {
  return (
    <div className={styles.topBarRight}>
      <Facebook
        rel="nofollow noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100026052723303"
        target="_blank"
      >
        <FaFacebookF className={styles.icon} />
      </Facebook>
      <Telegram
        rel="nofollow noopener noreferrer"
        href="https://t.me/devidolmm"
        target="_blank"
      >
        <FaTelegramPlane className={styles.icon} />
      </Telegram>
    </div>
  );
};

export default TopBarRight;
