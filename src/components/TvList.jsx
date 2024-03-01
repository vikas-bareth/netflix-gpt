import React from "react";
import TvCard from "./TvCard";

const TvList = ({ title, tvShows }) => {
  return (
    <div className="px-6">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl py-4 font-bold">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {tvShows?.map((tv) => (
            <TvCard key={tv.id} posterPath={tv.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvList;
