import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "src/global.scss";

import Main from "src/main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
