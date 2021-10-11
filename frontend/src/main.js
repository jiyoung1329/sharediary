import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "src/home/home";
import Login from "src/sign/login";
import Sign from "src/sign/sign";
import Create from "src/create/create";

const Main = () => {
  return (
    <div>
      <Route path="/" component={Login} exact />
      <Route path="/diary" component={Home} exact />
      <Route path="/signUp" component={Sign} exact />
      <Route path="/create" component={Create} exact />
    </div>
  );
};

export default Main;
