import React from 'react';
import './index.css';

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-light justify-content-center text-center pt-5">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
