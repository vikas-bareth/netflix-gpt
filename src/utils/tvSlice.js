import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name:'tv',
    initialState:{
        topRatedTv:null,
        popularTv:null
    },
    reducers:{
        addTopRatedTv:(state,action) => {
            state.topRatedTv = action.payload
        },
        addPopularTv:(state,action) => {
            state.popularTv = action.payload
        }
    }
})

export const {addTopRatedTv,addPopularTv} = tvSlice.actions;
export default tvSlice.reducer;