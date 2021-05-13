import React from 'react';
import 'swiper/swiper-bundle.css';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import $ from 'jquery';

let starter = "https://image.tmdb.org/t/p/w500";
let prevlink = "https://api.themoviedb.org/3/movie/";
let afterLink = "/watch/providers?api_key=17331affd7df6987ddf68b45f010a455";
let temp;

const Card = (props) => {
    return (
        <>
            <div className="swiper-slide" ><img src={starter + props.img_path} alt="Poster" />
                <div className="movieDetails">
                    <h5>{props.title}</h5>
                    {
                        $.get(`${prevlink}+${props.id}+${afterLink}`, data => {
                            temp = (Object.values(data.results)[0]).link;
                        })
                    }
                    <a href={temp}>watch</a>
                </div>
            </div>

        </>
    )
}



export default Card
