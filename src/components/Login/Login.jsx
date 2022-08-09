import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => setShowPass(!showPass);
  return (
    <div className={styles.loginPage}>
      <h5>Welcome Back, Please Login</h5>
      <form className={styles.form}>
        <input type="email" placeholder="Email" />
        <input type={showPass ? "text" : "password"} placeholder="Password" />
        <span onClick={showPassword} className={styles.showPass}>
          {showPass ? (
            <VisibilityOffOutlinedIcon className={styles.showPassIcon} />
          ) : (
            <VisibilityOutlinedIcon className={styles.showPassIcon} />
          )}
        </span>
        <button className={styles.loginBtn}>Login</button>
      </form>
      <div className={styles.bottom}>
        <Link className={styles.forgotPassword} to="/forgot_password">
          Forgot Password?
        </Link>
        <Link className={styles.register} to="/register">
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
