import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./index.css";
import requests from './Requests';


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
            <div className="row flex-row flex-nowrap mt-4 pb-4 pt-2" style={{
                overflowX: "auto",
            }}>
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
            <div className="row flex-row flex-nowrap mt-4 pb-4 pt-2" style={{
                overflowX: "auto",
            }}>
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
        </>
    )
}

export default App;
