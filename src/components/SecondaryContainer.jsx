import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import TvList from "./TvList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  const movies = useSelector((store) => store.movies);
  const tv = useSelector((store) => store.tv);
  return (
    <div className="bg-black">
      <div className="-mt-48 pl-12 relative z-20">
        <MovieList
          title={`${lang[langKey].nowPlaying}`}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={`${lang[langKey].topRated}`}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={`${lang[langKey].trending}`}
          movies={movies.trending}
        />
        <MovieList
          title={`${lang[langKey].upcoming}`}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={`${lang[langKey].popular}`}
          movies={movies.popularMovies}
        />
        <TvList title={`${lang[langKey].topRatedTv}`} tvShows={tv.topRatedTv} />
        <TvList title={`${lang[langKey].popularTv}`} tvShows={tv.popularTv} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
