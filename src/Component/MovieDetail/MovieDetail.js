import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillStar,AiFillLike,AiFillCalendar } from "react-icons/ai";
import { BiSolidTime } from "react-icons/bi";
import "./MovieDetail.scss";
import { fetchAsynMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../feature/movies/movieSlice';
const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsynMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])
    return (
        <div className='movie-section'>
            {Object.keys(data).length === 0 ?
                (<div>...Loading</div>)
                : (
                    <>
                        <div className='section-left'>
                            <div className='movie-title'>
                                {data.Title}
                            </div>
                            <div className='movie-rating'>
                                <span>
                                    IMDB Rating <AiFillStar/> : {data.imdbRating}
                                </span>
                                <span>
                                    IMDB Votes <AiFillLike/> : {data.imdbVotes}
                                </span>
                                <span>
                                    Runtime <BiSolidTime/> : {data.Runtime}
                                </span>
                                <span>
                                    Year <AiFillCalendar/> : {data.Year}
                                </span>
                            </div>
                            <div className='movie-plot'>{data.Plot}</div>
                            <div className='movie-info'>
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Generes</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Language</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                                <div>
                                    <span>BoxOffice</span>
                                    <span>{data.BoxOffice}</span>
                                </div>
                                <div>
                                    <span>Country</span>
                                    <span>{data.Country}</span>
                                </div>
                            </div>
                        </div>
                        <div className='section-right'>
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                    </>)}
        </div>
    );
};

export default MovieDetail;