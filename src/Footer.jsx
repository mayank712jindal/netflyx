import React from 'react'
import './index.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-3 pt-4 py-2 mt-3 footer justify-content-center d-flex">
                <div className="container-fluid row">
                    <div className="col-md-3 text-center">
                        <p>Genres</p>
                        <ul>
                            <li><a href="">Action</a></li>
                            <li><a href="">Comedy</a></li>
                            <li><a href="">Horror</a></li>
                            <li><a href="">Romance</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <p>Genres</p>
                        <ul>
                            <li><a href="">Action</a></li>
                            <li><a href="">Comedy</a></li>
                            <li><a href="">Horror</a></li>
                            <li><a href="">Romance</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <p>Genres</p>
                        <ul>
                            <li><a href="#action">Action</a></li>
                            <li><a href="#comedy">Comedy</a></li>
                            <li><a href="#horror">Horror</a></li>
                            <li><a href="#romance">Romance</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <p>Premium</p>
                        <ul>
                            <li><a href="#trending">Trending Now</a></li>
                            <li><a href="#original">Netflix Originals</a></li>
                            <li><a href="#topRated">Top Rated</a></li>
                            <li><a href="#documentaries">Documentaries</a></li>
                        </ul>
                    </div>
                    <div className="col-12 text-center p-0 m-0 mt-2">
                        © Copyright Netflyx | Made with love
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
