import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTv } from "../utils/tvSlice";

const useTopRatedTv = () => {
    const dispatch = useDispatch();
    const getTopRatedTv = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS)
        const topRated = await data.json()
        dispatch(addTopRatedTv(topRated.results))
    }
    useEffect(() => {
        getTopRatedTv()
    },[])
}

export default useTopRatedTv;