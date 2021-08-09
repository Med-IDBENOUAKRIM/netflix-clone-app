import React from 'react';
import requests from '../../config';
import Banner from '../banner/Banner';
import NavBar from '../navBar/NavBar';
import Row from '../row/Row';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div className='homeScreen' >
            {/* Nav */}
            <NavBar />

            <Banner />

            {/* Rows */}
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
