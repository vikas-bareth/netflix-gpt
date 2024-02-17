import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTv } from "../utils/tvSlice";

const useTopRatedTv = () => {
    const dispatch = useDispatch();
    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS)
        const topRated = await data.json()
        dispatch(addTopRatedTv(topRated.results))
    }
    useEffect(() => {
        getTopRated()
    },[])
}

export default useTopRatedTv;