import React from "react";
import "src/sign/sign.css";

const Sign = () => {
  return (
    <div class="signup">
      <h1 class="title">Sign up</h1>
      <input class="id" placeholder="ID" />
      <input class="password" placeholder="PASSWORD" type="password" />
      <input
        class="passwordCheck"
        placeholder="PASSWORD CHECK"
        type="password"
      />
      <button class="signupButton">Sign up</button>
    </div>
  );
};
export default Sign;
