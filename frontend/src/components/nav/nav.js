import React from "react";
import { Link } from "react-router-dom";
import Sign from "src/sign/sign";

import "bootstrap-icons/font/bootstrap-icons.css";
import "src/components/nav/nav.css";

const handleSignout = () => {
  // 1. 로그아웃
  // 2. 로그아웃이 완료되면
  // 2-1. alert('로그아웃이 완료되었습니다!)'
  // 2-2. localhost:3000/으로 이동
};

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/create">
        <i class="navbar-create bi bi-pencil-square" />
      </Link>
      <Link to="/diary" className="navbar-title">
        <div>user의 다이어리</div>
      </Link>
      <div className="navbar-menu">
        <div className="signout-btn" onclick={handleSignout}>
          로그아웃
        </div>
      </div>
    </nav>
  );
};

export default Nav;
