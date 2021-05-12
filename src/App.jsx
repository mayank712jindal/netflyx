import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./index.css";
import requests from './Requests';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const baseURL = "https://api.themoviedb.org/3";
const horrorMovies = () => fetch(baseURL + requests.fetchHorrorMovies).then(res => res.json());
const romanticMovies = () => fetch(baseURL + requests.fetchRomanceMovies).then(res => res.json());
const App = () => {
    const [horror, horrorMov] = useState([]);
    const [romantic, romanticMov] = useState([]);
    // const [horror, horrorMov] = useState([]);
    // const [horror, horrorMov] = useState([]);
    // const [horror, horrorMov] = useState([]);

    useEffect(() => {
        horrorMovies().then(data => horrorMov(data.results));
        romanticMovies().then(data => romanticMov(data.results));
        // horrorMovies().then(data => horrorMov(data.results));
        // horrorMovies().then(data => horrorMov(data.results));
        // horrorMovies().then(data => horrorMov(data.results));
    }, []);

    return (

        <>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        horror.map(item => {
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
            { swiper.update}

        </>
    )
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    loadPrevNextAmount: 2,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    rebuildOnUpdate: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    }
});
// alert(swiper.length)
export default App;
