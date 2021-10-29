import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "src/home/home";
import Login from "src/pages/sign/login";
import Sign from "src/pages/sign/sign";
import Create from "src/pages/create/create";

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
