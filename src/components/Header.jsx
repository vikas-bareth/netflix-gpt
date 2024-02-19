import React, { useEffect } from "react";
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
    <div className="flex justify-between items-center container mx-auto  p-3 absolute bg-gradient-to-b from-black z-10 px-8 min-w-full">
      <div>
        <Link to={"/"}>
          <img src={LOGO} alt="" className="w-32" />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <select
            onChange={(e) => handleLangChange(e)}
            name=""
            id=""
            className="py-3 px-2 rounded-lg bg-gray-700 bg-opacity-50 hover:border hover:bg-gray-900 text-white font-semibold"
          >
            <option value="en">English</option>
            <option value="hindi">हिन्दी</option>
            <option value="spanish">español</option>
          </select>
        </div>
        {user ? (
          <div className="flex">
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
              className="w-12 h-12 me-2 rounded"
            />

            <button
              className="bg-red-600 hover:bg-red-700 cursor-pointer py-2 px-4 rounded text-white font-semibold"
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
