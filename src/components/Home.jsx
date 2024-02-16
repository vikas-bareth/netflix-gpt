import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="text-center text-white ">
        <h1 className="font-extrabold text-5xl py-7">Welcome to Netflix GPT</h1>
        <p className="text-xl font-sans">Watch anywhere. Cancel anytime.</p>
        <div className="mt-4">
          <p className="text-xl font-sans">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex items-center justify-center mt-3 flex-wrap">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-900 bg-opacity-90  py-4 px-3 me-1 w-3/6"
            />

            <Link
              to={"/login"}
              className="font-netflix font-bold bg-red-600 py-4 px-5 cursor-pointer hover:bg-red-700 rounded"
            >
              Get Started &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
