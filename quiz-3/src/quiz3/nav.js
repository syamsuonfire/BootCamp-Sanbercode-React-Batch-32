import Search from "antd/lib/transfer/search";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MobileAppsContext } from "./context/mobileAppsContext";
import "./css/style.css";
import logo from "./img/logo.png";

const Nav = () => {
  let history = useHistory();

  const { searchStatus, setSearchStatus } = useContext(MobileAppsContext);

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
        <form method="post" onSubmit={handleSearch}>
          <input type="text" onChange={handleChange} value={search} />
          <input type="submit" value="Cari" />
        </form>
      </div>
    </>
  );
};

export default Nav;
