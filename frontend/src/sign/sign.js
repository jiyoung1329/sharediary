import React from "react";
import "src/sign/sign.css";

const Sign = () => {
  return (
    <div class="signup">

      <h2 class="title">Sign Up</h2>
      
      <input class="id" 
             placeholder="ID" />

      <input class="password"
             placeholder="PASSWORD"
             type="password" />

      <input class="passwordCheck"
             placeholder="PASSWORD CHECK"
             type="password" />

      <button class="signupButton">Sign up</button>

    </div>

  );
};
export default Sign;
