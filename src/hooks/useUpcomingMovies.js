import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcoming = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const upcomingMovies = await data.json()
        dispatch(addUpcomingMovies(upcomingMovies.results))
    }
    useEffect(() => {
        getUpcoming()
    },[])
}

export default useUpcomingMovies;