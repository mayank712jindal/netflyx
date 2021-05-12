import React from 'react';
import 'swiper/swiper-bundle.css';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

let starter = "https://image.tmdb.org/t/p/w500";

const Card = (props) => {
    return (
        <>
            <SwiperSlide ><img src={starter + props.img_path} alt="Poster" /></SwiperSlide>

        </>
    )
}



export default Card
