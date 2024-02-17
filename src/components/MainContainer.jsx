import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div className="text-white">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
