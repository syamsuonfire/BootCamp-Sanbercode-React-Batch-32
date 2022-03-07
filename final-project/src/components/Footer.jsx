import React from "react";
import { Layout } from "antd";
const Foot = Layout.Footer;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Foot style={{ textAlign: "center" }}>
      Sanbercode ©{year} Created by Syamsu Rijal Efendi
    </Foot>
  );
};

export default Footer;
