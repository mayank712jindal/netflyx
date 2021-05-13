import React from 'react'

let starter = "https://image.tmdb.org/t/p/w500";
const trendingMovies = () => fetch(starter + requests.fetchTrending).then(res => res.json());

const TvSection = () => {

    const [trending, trendingMov] = useState([]);

    useEffect(() => {
        trendingMovies().then(data => trendingMov(data.results));
    }, []);

    return (
        <div className="container">
            <div className="col-lg-6">
                vssdnvljdsnlvsnslvldflvfd lvfdsvlkd
            </div>
            <div className="col-lg-6">
                {
                    trending.map(item => {

                    })
                }
            </div>
        </div>
    )
}

export default TvSection
