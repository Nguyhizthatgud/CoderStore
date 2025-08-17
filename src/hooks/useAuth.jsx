import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
