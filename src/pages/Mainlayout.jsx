import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import AppBreadcrumb from "../components/Breadcrumb";
const { Header, Content, Footer } = Layout;

const Mainlayout = ({ children }) => {
  return (
    <Layout className="min-h-screen flex flex-col" style={{ overflow: "hidden" }}>
      {/* Header */}
      <Header className="flex items-center">
        <Navbar />
      </Header>

      {/* Breadcrumb */}
      <AppBreadcrumb />

      {/* Main Content */}

      <Content
        className="flex mx-auto w-full justify-center"
        style={{
          background: "var(--background-color)",
          paddingTop: "50px",
          paddingBottom: "20px"
        }}
      >
        {children}
      </Content>
      {/* Footer */}
      <Footer
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          background: "var(--tertiary-color)"
        }}
      >
        <div className=" mx-auto px-4">ShooStore ©{new Date().getFullYear()} Nguyhizthatgud author</div>
      </Footer>
    </Layout>
  );
};

export default Mainlayout;
