import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearch:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieResults:(state,action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults
            state.movieNames = movieNames
        }

    }
})

export const {toggleGptSearch,addMovieResults} = gptSlice.actions;
export default gptSlice.reducer;