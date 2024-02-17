import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-in',API_OPTIONS)
        const nowPlaying = await data.json()
        dispatch(addNowPlaying(nowPlaying.results))
    }
    useEffect(() => {
        getNowPlaying()
    },[])
}

export default useNowPlayingMovies;