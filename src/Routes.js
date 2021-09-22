import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/Home";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
      </Switch>
    </Router>
  );
};

export default Routes;
