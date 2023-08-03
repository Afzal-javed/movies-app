import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { MdAccountCircle } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import user from "../../images/user.png"
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';

const Header = () => {
    const [term,setTerm]=useState("");
    const dispatch=useDispatch();
    const submithandler=(e)=>{
        e.preventDefault();
        if(term===""){
            return alert("Please enter movie or show name");
           
        }
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")
    }
    return (
        <div className='header'>
            
            <div className='logo'><Link to="/">MovisApp</Link></div>
            <div className='search-bar'>
                <form onSubmit={submithandler}>
                    <input type='text'
                     value={term}
                     placeholder='Search movies or Shows' 
                     onChange={(e)=>setTerm(e.target.value)}/>
                    <button 
                    type='submit' 
                    className='search-icon'>
                    <FcSearch/></button>
                </form>
            </div>
            <div className='user-img'>
                <img src={user} alt=''/>
                {/* <i>
                <MdAccountCircle />
                </i> */}
            </div>
        </div>
    );
};

export default Header;