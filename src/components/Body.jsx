import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div
      className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] 
    h-screen"
    >
      <div className="bg-black h-full bg-opacity-50">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
