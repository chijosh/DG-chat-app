import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#f7f7ff"
      }}
    >
      <p>
        ChatApp <Icon type="message" />
      </p>
      <div>Copyright © {new Date().getFullYear()} By Chi Joshua</div>
    </div>
  );
}

export default Footer;
