import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularTv } from "../utils/tvSlice";

const usePopularTVShow = () => {
    const popularTV = useSelector((store) => store.tv.popularTv)
    const dispatch = useDispatch();
    const getPopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',API_OPTIONS)
        const populartv = await data.json()
        dispatch(addPopularTv(populartv.results))
    }
    useEffect(() => {
       !popularTV && getPopular()
    },[])
}

export default usePopularTVShow;