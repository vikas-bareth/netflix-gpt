import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  function handleRegisterClick() {
    setIsRegistered(!isRegistered);
  }
  return (
    <div
      className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] 
h-screen"
    >
      <div className="bg-black h-full bg-opacity-50">
        <Header />
        <section className="flex flex-col justify-center items-center w-full mt-10">
          <div className="bg-black bg-opacity-65 p-10  sm:w-3/12">
            <h1 className="text-start font-sans font-bold text-3xl text-white">
              {isRegistered ? "Sign In" : "Sign Up"}
            </h1>
            <form
              className="mt-6"
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isRegistered && (
                <div className="relative mb-5">
                  <input
                    type="text"
                    id="Name"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Name
                  </label>
                </div>
              )}
              <div className="relative mb-5">
                <input
                  type="email"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <button className="bg-red-600 hover:bg-red-700 cursor-pointer px-3 py-2 text-white font-bold w-full mt-5">
                {isRegistered ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div>
              <p className="text-gray-400 mt-4">
                {isRegistered ? "New to Netflix?" : "Already a user?"}
                <span
                  className="hover:underline cursor-pointer font-semibold text-white ms-1"
                  onClick={handleRegisterClick}
                >
                  {isRegistered ? "Sign up now." : "Sign In"}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
