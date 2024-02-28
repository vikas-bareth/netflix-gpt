import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const url = '';

const useGPTSearchMovie = (movie) => {
    const dispatch = useDispatch();
    const getGptMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        const queryMovies = await data.json()
    }

    useEffect(() => {
        getGptMovie()
    },[])
}