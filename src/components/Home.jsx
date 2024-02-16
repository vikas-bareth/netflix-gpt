import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] 
    h-screen"
    >
      <div className="bg-black h-full bg-opacity-50">
        <section className=" flex flex-col justify-center items-center">
          <div className="text-center text-white ">
            <h1 className="font-extrabold text-5xl py-7">
              Welcome to Netflix GPT
            </h1>
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
      </div>
    </div>
  );
};

export default Home;
