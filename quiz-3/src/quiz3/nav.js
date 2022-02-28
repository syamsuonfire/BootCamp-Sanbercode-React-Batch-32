import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MobileAppsContext } from "./context/mobileAppsContext";
import "./css/style.css";
import logo from "./img/logo.png";

const Nav = () => {
  const { search, setSearch } = useContext(MobileAppsContext);

  const handleChangeSearch = (e) => {
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
        <form>
          <input type="text" value={search} onChange={handleChangeSearch} />
          <input type="submit" value="Cari" />
        </form>
      </div>
    </>
  );
};

export default Nav;
