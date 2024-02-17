import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrending from "../hooks/useTrending";
import useTopRatedTv from "../hooks/useTopRatedTV";
import usePopularTVShow from "../hooks/usePopularTvShow";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrending();
  useTopRatedTv();
  usePopularTVShow();
  return (
    <div className="">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
