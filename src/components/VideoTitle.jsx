import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="main-display text-center w-full md:w-4/12 md:text-left md:ms-28 md:mt-28
      "
    >
      <h1 className="main-heading text-5xl font-extrabold font-netflix">
        {title}
      </h1>
      <p className="main-description font-netflix mt-4 mb-4 font-normal">
        {overview}
      </p>
      <div className="main-button font-semibold">
        <button className="bg-white text-black px-8 py-2 m-1 rounded">
          <span className="bi bi-play-fill"></span> Play
        </button>
        <button className="bg-white text-black px-8 py-2 m-1 rounded">
          More Info <span className="bi bi-info-circle"></span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
