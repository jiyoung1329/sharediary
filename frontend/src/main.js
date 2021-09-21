import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Loading from "src/components/loading/page.js";
import Home from "src/home/index";
import Nav from "src/components/nav/index";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="container m-10">
        <Home /> 
      </div>
    </div>
  );
};

export default Main;
