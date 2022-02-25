import React from "react";
import Label from "./label";
import logo from "./logo.png";
import "./tugas10.css";

const Tugas10 = () => {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <p>THINGS TO DO</p>
      <small>During bootcamp in sanbercode</small>
      <hr />
      <form action="">
        <Label name="Belajar GIT & CLI" />
        <Label name="Belajar HTMl & CSS" />
        <Label name="Belajar Javascript" />
        <Label name="Belajar ReactJS Dasar" />
        <Label name="Belajar ReacrJS Advance" />
        <br />
        <button className="button">Send</button>
      </form>
    </div>
  );
};

export default Tugas10;
