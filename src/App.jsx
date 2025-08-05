/* filepath: c:\Users\tvc45\CoderStore\CoderStore\src\App.jsx */
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Layout, Breadcrumb, Menu, Checkbox, Radio, Slider, Col, Row, Flex } from "antd";
import Contentpage from "./pages/Contentpage";

const items = [{ title: "Home" }, { title: "List" }, { title: "App" }];
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      {/* Header */}
      <Header className="flex items-center">
        <Navbar />
      </Header>

      {/* Breadcrumb */}
      <div className="bg-[var(--secondary-background-color)]">
        <Breadcrumb className="flex items-center mx-auto" style={{ padding: "12px 50px" }} items={items} />
      </div>

      {/* Main Content */}
      <Content
        className="flex mx-auto w-full justify-center items-center py-6"
        style={{
          background: "var(--background-color)"
        }}
      >
        <Contentpage />
      </Content>
      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          background: "var(--tertiary-color)"
        }}
      >
        <div className="container mx-auto px-4">CoderStore ©2024 Created by Your Team</div>
      </Footer>
    </Layout>
  );
}

export default App;
