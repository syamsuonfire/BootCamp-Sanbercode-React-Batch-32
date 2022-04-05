import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MobileAppsContext } from "./context/mobileAppsContext";
import { UserContext } from "./context/UserContext";
import "./css/style.css";
import logo from "./img/logo.png";
import Cookies from "js-cookie";

const Nav = () => {
  let history = useHistory();

  const { setLoginStatus } = useContext(UserContext);

  const { setSearchStatus } = useContext(MobileAppsContext);

  const handleLogout = () => {
    setLoginStatus(false);
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");
    // history.push("/login");
    window.location = "/login";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchStatus(true);
    setSearch("");
    history.push(`/search/${search}`);
  };

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="topnav">
        <Link to="/">
          <img src={logo} width="70" alt="logo" />
        </Link>

        <Link to="/">Home</Link>
        <Link to="/mobile-list">Mobile Apps list</Link>
        <Link to="/about">About</Link>
        {Cookies.get("token") !== undefined && (
          <Link onClick={handleLogout}>Logout</Link>
        )}

        {Cookies.get("token") === undefined && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        <form method="post" onSubmit={handleSearch}>
          <input type="text" onChange={handleChange} value={search} />
          <input type="submit" value="Cari" />
        </form>
      </div>
    </>
  );
};

export default Nav;
