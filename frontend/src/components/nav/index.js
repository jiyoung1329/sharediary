import React from "react";
import styles from "src/components/nav/index.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          List
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
