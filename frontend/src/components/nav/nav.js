import React from "react";
import { Link } from "react-router-dom";
import Sign from "src/sign/sign";

import "bootstrap-icons/font/bootstrap-icons.css";
import "src/components/nav/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <i class="navbar-create bi bi-pencil-square" />
      </a>
      <div className="navbar-title">user의 다이어리</div>
      <div className="navbar-menu">
        <Link exact to="/sign">
          로그인
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
