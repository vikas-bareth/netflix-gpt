import userReducer from "./userSlice"
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import tvReducer from "./tvSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        tv:tvReducer,
        gpt:gptReducer,
        config:configReducer
    }
})

export default appStore;
