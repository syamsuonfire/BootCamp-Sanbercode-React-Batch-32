import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
const { Content } = Layout;

const LayoutComponent = (props) => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          {Cookies.get("token") !== undefined && <Sidebar />}
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content id="content">{props.children}</Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
