import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {APIKey} from "../../common/apis/movieApiKey"
import movieApi from "../../common/apis/movieApi"
// import { addMovies } from '../../feature/movies/movieSlice';

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',
async(term)=>{
    const response=await movieApi.
    get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    .catch((err)=>{
        console.log("Err :",err);
    });
    return response.data;
});
export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',
async(term)=>{
    const response=await movieApi.
    get(`?apiKey=${APIKey}&s=${term}&type=series`)
    .catch((err)=>{
        console.log("Err :",err);
    });
    return response.data;
})
export const fetchAsynMovieOrShowDetail=createAsyncThunk('movies/fetchAsynMovieOrShowDetail',
async(id)=>{
    const response=await movieApi.
    get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    .catch((err)=>{
        console.log("Err :",err);
    });
    return response.data;
})
const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
};
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //         state.movies=payload;
        // },
        removeSelectedMovieOrShow: (state)=>{
            state.selectedMovieOrShow={};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched Successfully");
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected!");
            
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched Successfully");
            return {...state,shows:payload};
        },
        [fetchAsynMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("fetched Successfully");
            return {...state,selectedMovieOrShow:payload};
        },
    }
});
export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;