import React from "react";
import { Layout, Menu, message } from "antd";
import {
  PlaySquareOutlined,
  UnorderedListOutlined,
  FormOutlined,
  LaptopOutlined,
  UserOutlined,
  UnlockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
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
    <Sider
      width={200}
      className="site-layout-background"
      id="sider"
      style={{ position: "fixed", zIndex: "2", height: "100%" }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["user"]}
        defaultOpenKeys={["user"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="user" icon={<UserOutlined />} title={Cookies.get("name")}>
          <Menu.Item key="change-password" icon={<UnlockOutlined />}>
            <Link to={"/change-password"}>Change Password</Link>
          </Menu.Item>
          <Menu.Item
            onClick={handleLogout}
            key="logout"
            icon={<LogoutOutlined />}
          >
            Logout
          </Menu.Item>
        </SubMenu>
        <SubMenu key="submovie" icon={<PlaySquareOutlined />} title="Movies">
          <Menu.Item key="submovie1" icon={<FormOutlined />}>
            <Link to="/create-movie">Create Movie</Link>
          </Menu.Item>
          {Cookies.get("token") !== undefined && (
            <Menu.Item key="submovie2" icon={<UnorderedListOutlined />}>
              <Link to="/table-movie">Table Movie</Link>
            </Menu.Item>
          )}
        </SubMenu>
        <SubMenu key="subgame" icon={<LaptopOutlined />} title="Games">
          <Menu.Item key="subgame1" icon={<FormOutlined />}>
            <Link to="/create-game">Create Game</Link>
          </Menu.Item>
          {Cookies.get("token") !== undefined && (
            <Menu.Item key="subgame2" icon={<UnorderedListOutlined />}>
              <Link to="/table-game">Table Game</Link>
            </Menu.Item>
          )}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
