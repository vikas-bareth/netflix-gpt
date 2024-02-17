import React, { useRef, useState } from "react";
import validateForm from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [formErrMsg, setFormErrMsg] = useState(null);
  const randomImg = Math.floor(Math.random() * USER_AVATAR.length + 1);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  function handleRegisterClick() {
    setIsRegistered(!isRegistered);
  }
  function handleSubmitClick() {
    // validateForm(email,password)
    const msg = validateForm(email.current.value, password.current.value);
    setFormErrMsg(msg);
    if (msg) return;
    if (!isRegistered) {
      //register logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR[randomImg],
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setFormErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //login logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrMsg(errorCode + "-" + errorMessage);
        });
    }
  }
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <div className="bg-black bg-opacity-65 p-10  sm:w-3/12 mt-32">
        <h1 className="text-start font-sans font-bold text-3xl text-white">
          {isRegistered ? "Sign In" : "Sign Up"}
        </h1>
        <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
          {!isRegistered && (
            <div className="relative mb-5">
              <input
                type="text"
                id="Name"
                ref={name}
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
              type="text"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
              placeholder=" "
              ref={email}
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
              type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
              placeholder=" "
              ref={password}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Password
            </label>
          </div>
          <div className="mt-1">
            <p className="text-red-500 font-sans">{formErrMsg}</p>
          </div>
          <button
            className="bg-red-600 hover:bg-red-700 cursor-pointer px-3 py-2 text-white font-bold w-full mt-5"
            onClick={handleSubmitClick}
          >
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
  );
};

export default Login;
