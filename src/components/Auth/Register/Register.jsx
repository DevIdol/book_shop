import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => setShowPass(!showPass);
  return (
    <div className={styles.registerPage}>
      <h5>Welcome, Please Register</h5>
      <form className={styles.form}>
        <span className={styles.name}><PersonRoundedIcon/></span>
        <input type='text' placeholder="Full Name" />
        <span className={styles.mail} ><MailRoundedIcon/></span>
        <input type="email" placeholder="Email" />
        <span className={styles.pass}><VpnKeyRoundedIcon/></span>
        <input type={showPass ? "text" : "password"} placeholder="Password" />

        <span onClick={showPassword} className={styles.showPass}>
          {showPass ? (
            <VisibilityOffOutlinedIcon className={styles.showPassIcon} />
          ) : (
            <VisibilityOutlinedIcon className={styles.showPassIcon} />
          )}
        </span>
        <button className={styles.registerBtn}>Register</button>
      </form>
      <div className={styles.bottom}>
        <Link className={styles.register} to="/login">
          Already have an account? Please Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
