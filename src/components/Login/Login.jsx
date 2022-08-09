import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <h4>Welcome Back</h4>
      <form className={styles.form}>
        <input type="text" placeholder="Full Name" />
        <input type="password" placeholder="Password" />
        <button className={styles.loginBtn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
