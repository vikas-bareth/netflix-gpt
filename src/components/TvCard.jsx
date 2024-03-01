import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const TvCard = ({ posterPath }) => {
  return (
    <div className="w-32 sm:w-40 md:w-48 pr-4 hover:cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} alt="tv poster" />
    </div>
  );
};

export default TvCard;
