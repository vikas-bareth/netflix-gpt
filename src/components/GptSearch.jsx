import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchQuery = useRef(null);

  async function tmdbMovieSearchApiCall(movie) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const queryMovies = await data.json();
    console.log(queryMovies.results);
    return queryMovies.results;
  }

  async function handleGptSearchClick() {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchQuery.current.value +
      ". only give me names of 5 movies, comma seperated. like movie1,movie2,movie3,movie4,movie5";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //later add error handle if not found
    }

    const gptMovies = gptResults.choices[0].message?.content.split(",");
    //now for each movie make tmdb search api call but they all return a promise so it's a promise array
    const promiseArray = gptMovies.map((movie) => {
      tmdbMovieSearchApiCall(movie);
    });
    //now resolve those promise using promise api promise.all
    const resolvedResults = await Promise.all(promiseArray);
    console.log(resolvedResults);
  }
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
                ref={searchQuery}
              />
              <label
                htmlFor="text"
                className="absolute text-sm text-gray-50  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                {lang[langKey].gptSearchPlaceholder}
              </label>
            </div>

            <div className="col-span-4 flex items-center mb-5 ms-3">
              <button
                className="py-2 px-5 rounded text-white bg-violet-600 font-medium hover:bg-violet-800 ms-2"
                onClick={handleGptSearchClick}
              >
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
