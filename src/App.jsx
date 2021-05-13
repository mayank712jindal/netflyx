import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./index.css";
import requests from './Requests';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Jumbotron from './Jumbotron';


const baseURL = "https://api.themoviedb.org/3";
const horrorMovies = () => fetch(baseURL + requests.fetchHorrorMovies).then(res => res.json());
const romanticMovies = () => fetch(baseURL + requests.fetchRomanceMovies).then(res => res.json());
const trendingMovies = () => fetch(baseURL + requests.fetchTrending).then(res => res.json());

const App = () => {
    const [horror, horrorMov] = useState([]);
    const [romantic, romanticMov] = useState([]);
    const [trending, trendingMov] = useState([]);
    // const [horror, horrorMov] = useState([]);
    // const [horror, horrorMov] = useState([]);

    useEffect(() => {
        horrorMovies().then(data => horrorMov(data.results));
        romanticMovies().then(data => romanticMov(data.results));
        trendingMovies().then(data => trendingMov(data.results));
        // horrorMovies().then(data => horrorMov(data.results));
        // horrorMovies().then(data => horrorMov(data.results));
    }, []);

    return (

        <>

            <h1>Horror Movies</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        horror.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                popularity={item.popularity}
                                id={item.id}
                                time={item.runtime}

                            />)
                        })
                    }
                </div>
            </div>
            <h1>Romantic </h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        romantic.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                overview={item.overview}
                                id={item.id}
                            />)
                        })
                    }
                </div>
            </div>
        </>

    )
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    rebuildOnUpdate: true,
    observer: true,
    breakpoints: {
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        999: {
            slidesPerView: 6
        }
    }
});
// alert(swiper.length)
export default App;
