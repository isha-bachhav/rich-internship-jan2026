import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navbar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about";
function Layouts() {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Layouts;
