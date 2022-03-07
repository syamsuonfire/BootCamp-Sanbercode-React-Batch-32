import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import LayoutComponent from "../layout/LayoutComponent";
import Home from "../pages/Home";
import Movies from "../pages/Movies/Movies";
import DetailMovie from "../pages/Movies/DetailMovie";
import TableMovie from "../pages/Movies/TableMovie";
import FormMovie from "../pages/Movies/FormMovie";
import Games from "../pages/Games/Games";
import DetailGame from "../pages/Games/DetailGame";
import TableGame from "../pages/Games/TableGame";
import FormGame from "../pages/Games/FormGame";
import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChangePassword from "../pages/ChangePassword";

const Routes = () => {
  const RouteLogin = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Redirect to="/" />;
    } else {
      return <Route {...props} />;
    }
  };

  const RoutePrivate = ({ token, ...props }) => {
    if (token) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LayoutComponent>
            <Home />
          </LayoutComponent>
        </Route>

        <Route exact path={"/movies"}>
          <LayoutComponent>
            <Movies />
          </LayoutComponent>
        </Route>

        <Route exact path={"/movies/:id"}>
          <LayoutComponent>
            <DetailMovie />
          </LayoutComponent>
        </Route>

        <Route exact path={"/table-movie"}>
          <LayoutComponent>
            <TableMovie />
          </LayoutComponent>
        </Route>

        <Route exact path={"/create-movie"}>
          <LayoutComponent>
            <FormMovie />
          </LayoutComponent>
        </Route>

        <Route exact path={"/edit-movie/:id"}>
          <LayoutComponent>
            <FormMovie />
          </LayoutComponent>
        </Route>

        <Route exact path={"/games"}>
          <LayoutComponent>
            <Games />
          </LayoutComponent>
        </Route>

        <Route exact path={"/games/:id"}>
          <LayoutComponent>
            <DetailGame />
          </LayoutComponent>
        </Route>

        <Route exact path={"/table-game"}>
          <LayoutComponent>
            <TableGame />
          </LayoutComponent>
        </Route>

        <Route exact path={"/create-game"}>
          <LayoutComponent>
            <FormGame />
          </LayoutComponent>
        </Route>

        <Route exact path={"/edit-game/:id"}>
          <LayoutComponent>
            <FormGame />
          </LayoutComponent>
        </Route>

        <RouteLogin exact path={"/login"}>
          <LayoutComponent>
            <Login />
          </LayoutComponent>
        </RouteLogin>

        <RouteLogin exact path={"/register"}>
          <LayoutComponent>
            <Register />
          </LayoutComponent>
        </RouteLogin>

        <RoutePrivate
          exact
          path={"/change-password"}
          token={Cookies.get("token")}
        >
          <LayoutComponent>
            <ChangePassword />
          </LayoutComponent>
        </RoutePrivate>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
