import React from "react";
import "../styles/components/Navbar.css";
import { Button } from "antd";

const Navbar = () => {
  return (
    <section className="w-full mx-auto flex items-center justify-between ">
      <h1 className="text-3xl font-bold">CoderStore</h1>
      <Button>Login</Button>
    </section>
  );
};

export default Navbar;
