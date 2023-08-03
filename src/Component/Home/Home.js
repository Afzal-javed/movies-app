import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/apis/movieApi"
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';
const Home = () => {
    
    const dispatch=useDispatch();
    useEffect(()=>{
       const movieText="Batman";
       const seriesText="Vikings";  
       dispatch (fetchAsyncMovies(movieText));
       dispatch (fetchAsyncShows(seriesText));
    },[dispatch]);
    return (
        <div>
        <div className='banner-img'>
          <MovieListing/>
        </div>
        </div>

    );
};

export default Home;