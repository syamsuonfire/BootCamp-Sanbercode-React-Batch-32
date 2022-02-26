import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataMahasiswaContext } from "../context/dataMahasiswaContext";
import "./nav.css";

const Nav = () => {
  const { theme, functions } = useContext(DataMahasiswaContext);

  const { handleTheme } = functions;

  return (
    <>
      <div className="topnav" style={theme[0]}>
        <Link style={theme[1]} to="/">
          Home
        </Link>
        <Link style={theme[1]} to="/tugas10">
          Tugas 10
        </Link>
        <Link style={theme[1]} href="/tugas11">
          Tugas 11
        </Link>
        <Link style={theme[1]} to="/tugas12">
          Tugas 12
        </Link>
        <Link style={theme[1]} to="/tugas13">
          Tugas 13
        </Link>
        <Link style={theme[1]} to="/tugas14">
          Tugas 14
        </Link>
        <Link style={theme[1]} to="/tugas15">
          Tugas 15
        </Link>
      </div>

      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <button
          style={{
            backgroundColor: "#04aa6d",

            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={handleTheme}
        >
          Change Navbar to Dark Theme
        </button>
      </div>
    </>
  );
};

export default Nav;
