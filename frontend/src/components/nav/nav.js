import React from "react";
import { Link } from "react-router-dom";
import Sign from "src/sign/sign";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "src/components/nav/nav.module.scss";

const handleSignout = () => {
  // 1. 로그아웃
  // 2. 로그아웃이 완료되면
  // 2-1. alert('로그아웃이 완료되었습니다!)'
  // 2-2. localhost:3000/으로 이동
};

const Nav = () => {
  return (
    <nav className={styles["navbar"]}>
      <Link to="/create">
        <i className={`bi bi-pencil-square ${styles["navbar-create"]}`} />
      </Link>
      <Link to="/diary" className={styles["navbar-title"]}>
        <div>user의 다이어리</div>
      </Link>
      <div className={styles["navbar-menu"]}>
        <div className={styles["signout-btn"]} onClick={handleSignout}>
          로그아웃
        </div>
      </div>
    </nav>
  );
};

export default Nav;
