import React from "react";
import { Link } from "react-router-dom";
import styles from "src/sign/login.module.scss";

const Login = () => {
  return (
    <div className={styles["sign-wrapper"]}>
      <div className={styles["signIn-wrapper"]}>
        <h1 className={styles["signIn-title"]}>Sign In</h1>
        <input
          className={styles["signIn-input"]}
          type="text"
          placeholder="ID"
        />
        <input
          className={styles["signIn-input"]}
          type="password"
          placeholder="PASSWORD"
        />
        <button className={styles["signIn-btn"]}>Sign In</button>
      </div>
      <div className={styles["signUp-wrapper"]}>
        <h1 className={styles["signUp-title"]}>안녕하세요 !</h1>
        <p className={styles["signUp-detail"]}>
          나만의 다이어리를 작성해보아요.
        </p>
        <Link to="/signUp">
          <button className={styles["signUp-btn"]}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
