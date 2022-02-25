import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataMahasiswaProvider } from "../context/dataMahasiswaContext";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas13 from "../Tugas-13/tugas13";
import Nav from "./nav";
import Tugas14Form from "./tugas14Form";
import Tugas14List from "./tugas14List";

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
          </Switch>
        </BrowserRouter>
      </DataMahasiswaProvider>
    </>
  );
};

export default Router;
