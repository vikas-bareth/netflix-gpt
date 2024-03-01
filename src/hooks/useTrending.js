import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrending } from "../utils/movieSlice";

const useTrending = () => {
    const trendingMovies = useSelector((store) => store.movies.trending)
    const dispatch = useDispatch();
    const getTrending = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US',API_OPTIONS)
        const trending = await data.json()
        dispatch(addTrending(trending.results))
    }
    useEffect(() => {
        !trendingMovies && getTrending()
    },[])
}

export default useTrending;