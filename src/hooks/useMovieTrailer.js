import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) =>{
    const dispatch = useDispatch()
    const getTrailer = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS
        );
        const trailerData = await data.json()
        const filterData = trailerData.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : trailerData.results[0];
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
      };
    useEffect(() => {
        getTrailer()
    },[])
}

export default useMovieTrailer;