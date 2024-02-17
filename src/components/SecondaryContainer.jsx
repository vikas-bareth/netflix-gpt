import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import TvList from "./TvList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tv = useSelector((store) => store.tv);
  return (
    <div className="bg-black">
      <div className="-mt-60 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Trending"} movies={movies.trending} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <TvList title={"Top Rated TV Shows"} tvShows={tv.topRatedTv} />
        <TvList title={"Popular TV Shows"} tvShows={tv.popularTv} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
