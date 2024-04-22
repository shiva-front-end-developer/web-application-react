import React from "react";
import { Outlet as RouterOutlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Outlet = () => {
  return (
    <div>
      <Navbar />
      <RouterOutlet />
      <Footer />
    </div>
  );
};

export default Outlet;
