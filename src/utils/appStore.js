import userReducer from "./userSlice"
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import tvReducer from "./tvSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        tv:tvReducer
    }
})

export default appStore;
