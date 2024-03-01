import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    const dispatch = useDispatch();
    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        const topRated = await data.json()
        dispatch(addTopRatedMovies(topRated.results))
    }
    useEffect(() => {
        if(!topRatedMovies){
            getTopRated()
        }
        // !topRatedMovies && getTopRated()
    },[])
}

export default useTopRatedMovies;