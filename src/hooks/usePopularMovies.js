import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const dispatch = useDispatch();
    const getPopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
        const popularMovies = await data.json()
        dispatch(addPopularMovies(popularMovies.results))
    }
    useEffect(() => {
        !popularMovies && getPopular()
    },[])
}

export default usePopularMovies;