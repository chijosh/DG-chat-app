import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu theme="dark" mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="chat">
        <a href="/chat">Chat</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
