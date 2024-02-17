import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className="flex justify-between items-center container mx-auto py-4 p-3 absolute bg-gradient-to-b from-black z-10 px-8 min-w-full">
      <div>
        <Link to={"/"}>
          <img src={LOGO} alt="" className="w-32" />
        </Link>
      </div>
      <div>
        {user ? (
          <div className="flex">
            <img
              src={user?.photoURL}
              alt="user-icon"
              className="w-12 h-12 me-2 rounded"
            />
            <button
              className="bg-red-600 hover:bg-red-700 cursor-pointer py-2 px-4 rounded text-white font-semibold"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            to={"/login"}
            className=" py-2 px-5 rounded text-white bg-red-600 font-medium hover:bg-red-700"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
