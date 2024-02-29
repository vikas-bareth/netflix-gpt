import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <div className="bg-black h-screen bg-opacity-50">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
