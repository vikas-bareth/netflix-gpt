import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-32 flex justify-center">
      <div className="bg-black bg-opacity-65 p-10 w-5/12 mt-32">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-12">
            <div className="relative mb-5 col-span-8">
              <input
                type="text"
                id="text"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-gray-900 bg-opacity-70 rounded-lg border-1 border-gray-300 appearance-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="text"
                className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                {lang[langKey].gptSearchPlaceholder}
              </label>
            </div>

            <div className="col-span-4 flex items-center mb-5 ms-3">
              <button className="py-2 px-5 rounded text-white bg-violet-600 font-medium hover:bg-violet-800 ms-2">
                {lang[langKey].search}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
