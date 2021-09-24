import Home from "src/home/index";
import Loading from "src/components/loading/page";
import Sign from "src/sign/sign";

import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <div>
      <Route path="/" component={Sign} />
      <Route path="/diary" component={Home} />
    </div>
  );
};

export default Main;
