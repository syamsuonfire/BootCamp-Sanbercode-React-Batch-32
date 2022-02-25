import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [style, setStyle] = useState("topnav");

  const changeStyle = () => {
    if (style === "topnav") {
      setStyle("color-nav");
    } else if (style === "color-nav") {
      setStyle("topnav ");
    }
  };
  return (
    <>
      <div className={style}>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/tugas10">Tugas 10</Link>
        <Link to="/tugas11">Tugas 11</Link>
        <Link to="/tugas12">Tugas 12</Link>
        <Link to="/tugas13">Tugas 13</Link>
        <Link to="/tugas14">Tugas 14</Link>
      </div>

      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <button onClick={changeStyle}>Change Navbar to Dark Theme</button>
      </div>
    </>
  );
};

export default Nav;
