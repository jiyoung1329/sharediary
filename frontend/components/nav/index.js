import React from "react";
import styles from "components/nav/index.module.scss";
import { Link } from "react-router-dom";

export default Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          List
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};
