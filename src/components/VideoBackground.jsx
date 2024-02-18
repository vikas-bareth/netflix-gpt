import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(id);
  return (
    <div className="">
      {/* <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&start=2`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      {/* using iframe for youtube-embed video wants to use third party cookies this is giving tons of warning on the browse page so watch out for that */}
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube-nocookie.com/embed/hXzcyx9V0xw?si=5VbLznR7R8fHISdM&amp;controls=0&amp;start=3&autoplay=1&mute=1&privacy=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
