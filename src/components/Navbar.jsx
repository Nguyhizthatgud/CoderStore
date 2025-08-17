import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";
import Loginpage from "./Loginpage.jsx";
import { Button, Modal, Form, Input, Avatar, notification } from "antd";
import { UnlockOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth.jsx";
const Navbar = () => {
  const Auth = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [BackGround, setBackGround] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleLogOut = () => {
    Auth.LogOut(() => {
      notification.success({
        message: "Đăng xuất thành công!",
        description: `Bái bai ${Auth.user.username} hehe.`
      });
    });
  };
  // Scroll listener to show/hide breadcrumb
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show breadcrumb when user scrolls down more than 100px
      setBackGround(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`bg-transparent w-full mx-auto flex items-center justify-between transition-all  duration-300`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 50px",
        height: BackGround ? "60px" : "60px",
        background: BackGround ? "rgba(0, 0, 0, 0.8)" : "#eaeaea",
        backdropFilter: "blur(15px)",
        transition: "all 0.3s ease-in-out"
      }}
    >
      <h1 className="text-3xl font-bold" style={{ color: BackGround ? "#fff" : "#000" }}>
        ShooStore
      </h1>
      <Modal
        title={
          <div className="text-center text-2xl font-semibold ">
            <div>
              <UnlockOutlined />
            </div>
            Đăng nhập đi anh? Tên gì đó...
            <div className="text-sm text-gray-500">#Em xin link git tham khảo đi anh:3</div>
          </div>
        }
        closable={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        style={{ width: "100%" }}
      >
        <Loginpage setIsModalOpen={setIsModalOpen} />
      </Modal>
      <div>
        {Auth.user ? (
          <div className="flex items-center gap-4">
            <Avatar
              className={`text-white`}
              style={{
                backgroundColor: BackGround ? "#1890ff" : "#40a9ff",
                color: "white",
                fontWeight: "600",
                fontSize: "14px",
                border: "2px solid rgba(255,255,255,0.3)"
              }}
            >
              {Auth.user.username.charAt(0)}
            </Avatar>
            <Button type="default" onClick={handleLogOut} style={{ color: "#000", fontWeight: "600" }}>
              <LogoutOutlined /> Log Out
            </Button>
          </div>
        ) : (
          <Button
            type="primary"
            onClick={showModal}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.3)",
              color: BackGround ? "#fff" : "#000",
              fontWeight: "600",
              backdropFilter: "blur(10px)"
            }}
          >
            <LoginOutlined /> Login
          </Button>
        )}
      </div>
    </section>
  );
};

export default Navbar;
