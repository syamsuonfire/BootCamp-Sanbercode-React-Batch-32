import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MobileAppsProvider } from "./context/mobileAppsContext";
import Nav from "./nav";
import Home from "./home";
import MobileList from "./mobileList";
import MobileForm from "./mobileForm";
import About from "./about";

const Router = () => {
  return (
    <>
      <MobileAppsProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/mobile-list"} component={MobileList} />
            <Route exact path={"/mobile-form"} component={MobileForm} />
            <Route
              exact
              path={"/mobile-form/edit/:slug"}
              component={MobileForm}
            />
            <Route
              exact
              path={"/search/:valueOfSearch"}
              component={MobileForm}
            />
            <Route exact path={"/about"} component={About} />
          </Switch>
        </BrowserRouter>
      </MobileAppsProvider>
    </>
  );
};

export default Router;
