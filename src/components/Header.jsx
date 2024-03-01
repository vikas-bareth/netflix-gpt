import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function handleLangChange(e) {
    dispatch(changeLanguage(e.target.value));
  }
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  function handleGptClick() {
    dispatch(toggleGptSearch());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-between container mx-auto  p-3 absolute bg-gradient-to-b from-black z-10 px-8 min-w-full bg-black sm:bg-transparent">
      <div className="flex justify-between items-center ">
        <div>
          <Link to={"/"}>
            <img src={LOGO} alt="" className="w-32" />
          </Link>
        </div>
        <div>
          <button
            onClick={toggleNavbar}
            className="md:hidden sm:hidden focus:outline-none text-white focus:text-red-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row sm:flex-row gap-3 transition-all duration-1000 ease-in-out ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <div>
          <select
            onChange={(e) => handleLangChange(e)}
            name=""
            id=""
            className="w-full sm:w-full py-3 px-2 rounded-lg bg-gray-700 bg-opacity-50 hover:border hover:bg-gray-900 text-white font-semibold"
          >
            <option value="en">English</option>
            <option value="hindi">हिन्दी</option>
            <option value="spanish">español</option>
          </select>
        </div>
        {user ? (
          <div className="flex flex-col gap-2 sm:flex-row md:flex-row">
            <button
              className="py-2 px-5 rounded text-white bg-violet-600 font-medium hover:bg-violet-800 me-2"
              onClick={handleGptClick}
            >
              {showGptSearch
                ? `${lang[langKey].homepage}`
                : `${lang[langKey].gptSearch}`}
            </button>
            <img
              src={user?.photoURL}
              alt="user-icon"
              className="w-12 h-12 rounded hidden md:block"
            />
            <button
              className="bg-red-600 hover:bg-red-700 cursor-pointer py-2 px-4 rounded text-white font-semibold me-2"
              onClick={handleSignOut}
            >
              {lang[langKey].signout}
            </button>
          </div>
        ) : (
          <Link
            to={"/login"}
            className=" py-2 px-5 rounded text-white bg-red-600 font-medium hover:bg-red-700"
          >
            {lang[langKey].singin}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
