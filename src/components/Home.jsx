import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../utils/languageConstants";
const Home = () => {
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="text-center text-white mt-20 bg-black bg-opacity-20 p-20">
        <h1 className="font-extrabold text-5xl py-7">
          {lang[langKey].welcomeMsg}
        </h1>
        <p className="text-xl font-sans">{lang[langKey].featureMsg}</p>
        {user ? (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-xl drop-shadow-lg w-8/12 mb-4 font-netflix">
              {lang[langKey].loggedInMsg}
            </p>
            <div className="flex items-center justify-center mt-3">
              <Link
                to={"/browse"}
                className="font-netflix font-bold bg-red-600 py-4 px-5
              cursor-pointer hover:bg-red-700 rounded"
              >
                {lang[langKey].browseBtn} &#8594;
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-xl font-sans">{lang[langKey].loggedOutMsg}</p>
            <div className="flex items-center justify-center mt-3 flex-wrap">
              <input
                type="email"
                placeholder={lang[langKey].emailPlaceholder}
                className="bg-gray-900 bg-opacity-90  py-4 px-3 me-1 w-3/6"
              />

              <Link
                to={"/login"}
                className="font-netflix font-bold bg-red-600 py-4 px-5 cursor-pointer hover:bg-red-700 rounded"
              >
                {lang[langKey].getStartedBtn} &#8594;
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
