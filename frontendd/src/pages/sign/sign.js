import React from "react";
import styles from "src/sign/sign.module.scss";

const Sign = () => {
  return (
    <div className={styles.signup}>
      <h1 className={styles.title}>Sign up</h1>
      <input className={styles.id} placeholder="ID" />
      <input
        className={styles.password}
        placeholder="PASSWORD"
        type="password"
      />
      <input
        className={styles.passwordCheck}
        placeholder="PASSWORD CHECK"
        type="password"
      />
      <button className={styles.signupButton}>Sign up</button>
    </div>
  );
};
export default Sign;
