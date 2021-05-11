import React from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import './index.css';

let starter = "https://image.tmdb.org/t/p/w500";

const Card = (props) => {
    return (
        <>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={starter + props.img_path} alt="Poster" /></div>
                </div>
            </div>
        </>
    )
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1000,

    }
});


export default Card
