import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";
import styles from "./TopBarLeft.module.css";

const Phone = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Mail = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const TopBarLeft = () => {
  return (
    <div className={styles.topBarLeft}>
      <Phone
        className={styles.content}
        href="tel:09891489955"
        target="__back"
        rel="nofollow noopener noreferrer"
      >
        <PhoneIcon className={styles.icon} />
        09 891489955
      </Phone>
      <Mail
        className={styles.content}
        href="mailto:devidol.mm@gmail.com"
        target="__back"
        rel="nofollow noopener noreferrer"
      >
        <EmailIcon className={styles.icon} />
        devidol.mm@gmail.com
      </Mail>
    </div>
  );
};

export default TopBarLeft;
