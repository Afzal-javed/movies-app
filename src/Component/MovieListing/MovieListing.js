import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Settings } from '../../common/settings';
import { getAllMovies,getAllShows } from '../../feature/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
    
    const movies=useSelector(getAllMovies);
    const shows=useSelector(getAllShows);
    // console.log(movies)
    let renderMovies="";
    let renderShows="";
    renderShows=shows.Response==="True" ? (
        shows.Search.map((movie,index)=>(
            <MovieCard key={index} data={movie}/>
        ))
    ) :(
        <div className='shows-error'>
            <h3>{shows.Error} </h3>
        </div>
    )

    renderMovies=movies.Response==="True" ? (
        movies.Search.map((movie,index)=>(
            <MovieCard key={index} data={movie}/>
        ))
    ) :(
        <div className='movies-error'>
            <h3>{movies.Error} </h3>
        </div>
    )
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...Settings}>{renderMovies}</Slider></div>
            </div>
            <div className='shows-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                <Slider {...Settings}>{renderShows}</Slider></div>
            </div>
        </div>
    );
};

export default MovieListing;