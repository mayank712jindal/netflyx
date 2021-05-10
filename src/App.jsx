import React from 'react'
import $ from 'jquery';
import Card from './Card';

for (let i = 100; i < 200; i++) {
    $.get(`https://api.themoviedb.org/3/movie/popular?api_key=17331affd7df6987ddf68b45f010a455&language=en-US&page=1`, function (data, status) {
        console.log(data);
    });
}

const App = () => {
    return (
        <>

        </>
    )
}

export default App;
