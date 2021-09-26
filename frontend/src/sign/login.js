import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="sign-wrapper">
      <div className="signIn-wrapper">
        <h1 className="signIn-title">Sign In</h1>
        <input className="signIn-input" type="text" placeholder="ID" />
        <input
          className="signIn-input"
          type="password"
          placeholder="PASSWORD"
        />
        <button className="signIn-btn">Sign In</button>
      </div>
      <div className="signUp-wrapper">
        <h1 className="signUp-title">안녕하세요 !</h1>
        <p className="signUp-detail">나만의 다이어리를 작성해보아요.</p>
        <button className="signUp-btn">Sign up</button>
      </div>
    </div>
  );
};
export default Login;
