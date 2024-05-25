import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
  console.log(location);
  return (
    <div>
      {/* {noHeaderFooter || <Navbar></Navbar>} */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
