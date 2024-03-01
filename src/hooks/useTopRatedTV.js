import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedTv } from "../utils/tvSlice";

const useTopRatedTv = () => {
    const topRatedTv = useSelector((store) => store.tv.topRatedTv)
    const dispatch = useDispatch();
    const getTopRatedTv = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS)
        const topRated = await data.json()
        dispatch(addTopRatedTv(topRated.results))
    }
    useEffect(() => {
        if(!topRatedTv){
            getTopRatedTv()
        }
        // !topRatedTv && getTopRatedTv()
    },[])
}

export default useTopRatedTv;