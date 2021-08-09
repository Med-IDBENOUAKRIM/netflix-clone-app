import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies)
    return (
        <div className='row' >
            <h2  >{title}</h2>
            <div className="row__posters">
            {
                movies.map(movie => (
                    <div>
                        <img className='row__img' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.name} />
                        <p className='row__title' >{movie.name || movie.title}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Row
