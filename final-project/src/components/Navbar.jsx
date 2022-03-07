import React from "react";
import { Layout, Menu, message } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  PlaySquareOutlined,
  LaptopOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import logo from "../assets/img/moviegames.png";

const { Header } = Layout;

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");
    message.success("Anda telah logout");
    history.push("/login");
    //window.location = "/login";
  };

  return (
    <Header
      className="header"
      style={{ position: "fixed", zIndex: "100", width: "100%" }}
    >
      <img className="logo" alt="logo" src={logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PlaySquareOutlined />}>
          <Link to="/movies">Movies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />}>
          <Link to="/games">Games</Link>
        </Menu.Item>

        {Cookies.get("token") === undefined && (
          <Menu.Item
            key="4"
            icon={<UserAddOutlined />}
            style={{ float: "right" }}
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
        )}
        {Cookies.get("token") === undefined && (
          <Menu.Item
            key="5"
            icon={<LoginOutlined />}
            style={{ float: "right" }}
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
        {Cookies.get("token") !== undefined && (
          <Menu.Item
            key="6"
            icon={<LogoutOutlined />}
            style={{ float: "right" }}
          >
            <Link onClick={handleLogout}>Logout</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
