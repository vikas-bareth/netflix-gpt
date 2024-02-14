import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center container mx-auto py-4 p-3">
      <div>
        <Link to={"/"}>
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
            className="w-32"
          />
        </Link>
      </div>
      <div>
        <Link
          to={"/login"}
          className=" py-2 px-5 rounded text-white bg-red-600 font-medium hover:bg-red-700"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
