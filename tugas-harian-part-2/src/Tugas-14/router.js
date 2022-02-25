import React from "react";
import Home from "./Home";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const Routes = () => {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router
  );
};

export default Routes;