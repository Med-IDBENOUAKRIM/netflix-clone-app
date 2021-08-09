import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../config';
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData()
    }, [])
    console.log(movie);

    const descLength = (txt, n) => txt?.length > 100 ? txt.substr(0, n - 1) + ' ...' : txt;

    return (
        <header className='banner' style={{ 
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
         }} >
            <div className="banner__content">
                <h1 className="banner__title">{movie?.name}</h1>
                <div className="banner__btns">
                    <button className="banner__btn" >Play</button>
                    <button className="banner__btn" >My list</button>
                </div>
                <h1 className="banner__description">
                    {descLength(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
