import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MobileAppsProvider } from "./context/mobileAppsContext";
import Nav from "./nav";
import Home from "./home";
import MobileList from "./mobileList";
import MobileForm from "./mobileForm";
import About from "./about";
import SearchSection from "./searchSection";
import Login from "../Auth/login";
import { UserProvider } from "./context/UserContext";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import Register from "../Auth/register";

const Router = () => {
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Redirect to="/" />;
    } else {
      return <Route {...props} />;
    }
  };

  return (
    <>
      <UserProvider>
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
                component={SearchSection}
              />
              <Route exact path={"/about"} component={About} />
              <LoginRoute exact path={"/login"} component={Login} />
              <LoginRoute exact path={"/register"} component={Register} />
            </Switch>
          </BrowserRouter>
        </MobileAppsProvider>
      </UserProvider>
    </>
  );
};

export default Router;
