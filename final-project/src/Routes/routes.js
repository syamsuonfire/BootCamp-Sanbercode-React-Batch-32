import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { GamesProvider } from "../Context/GamesContext";
import LayoutComponent from "../Layout/layout";

const Routes = () => {
  return (
    <>
      <GamesProvider>
        <BrowserRouter>
          <LayoutComponent />
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
      </GamesProvider>
    </>
  );
};

export default Routes;
