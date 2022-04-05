import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataMahasiswaProvider } from "../context/dataMahasiswaContext";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas13 from "../Tugas-13/tugas13";
import Tugas14Form from "../Tugas-14/tugas14Form";
import Tugas14List from "../Tugas-14/tugas14List";
import Tugas15List from "../Tugas-15/tugas15List";
import Tugas15Form from "../Tugas-15/tugas15Form";
import Nav from "./nav";

const Router = () => {
  return (
    <>
      <DataMahasiswaProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path={"/"} />
            <Route exact path={"/tugas10"} component={Tugas10} />
            <Route exact path={"/tugas11"} component={Tugas11} />
            <Route exact path={"/tugas12"} component={Tugas12} />
            <Route exact path={"/tugas13"} component={Tugas13} />
            <Route exact path={"/tugas14"} component={Tugas14List} />
            <Route exact path={"/tugas14/create"} component={Tugas14Form} />
            <Route exact path={"/tugas14/edit/:slug"} component={Tugas14Form} />
            <Route exact path={"/tugas15"} component={Tugas15List} />
            <Route exact path={"/tugas15/create"} component={Tugas15Form} />
            <Route exact path={"/tugas15/edit/:slug"} component={Tugas15Form} />
          </Switch>
        </BrowserRouter>
      </DataMahasiswaProvider>
    </>
  );
};

export default Router;
