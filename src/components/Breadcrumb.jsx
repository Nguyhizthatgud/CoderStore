import React from "react";
import { Breadcrumb, notification } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth.jsx"; // check validation
const AppBreadcrumb = () => {
  const { isAuthenticated } = useAuth();
  const handleShopClick = () => {
    if (!isAuthenticated) {
      notification.error({
        message: "Đăng nhập đi anh, vội thế?",
        description: "Vui lòng đăng nhập để truy cập Shop.",
        placement: "topRight"
      });
    }
  };
  const items = [
    {
      title: (
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeOutlined style={{ marginRight: "4px" }} />
        </Link>
      )
    },
    {
      title: (
        <Link onClick={handleShopClick} to="/user" style={{ textDecoration: "none" }}>
          <UserOutlined style={{ marginRight: "4px" }} />
          Shop
        </Link>
      )
    }
  ];
  return (
    <div
      className="bg-transparent fixed right-0 top-14 left-0 z-20"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
      }}
    >
      <Breadcrumb
        style={{
          display: "flex",
          alignItems: "center",
          padding: "12px 50px",
          color: "#fff"
        }}
        items={items}
      />
    </div>
  );
};

export default AppBreadcrumb;
