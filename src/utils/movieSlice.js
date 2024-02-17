import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trending:null
    },
    reducers:{
        addNowPlaying:(state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload
        },
        addTrending:(state,action) => {
            state.trending = action.payload
        }
    }

})

export const {addNowPlaying,addTrailerVideo,addPopularMovies,addTopRatedMovies, addUpcomingMovies ,addTrending} = movieSlice.actions
export default movieSlice.reducer;