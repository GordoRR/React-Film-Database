import React, { useState, useEffect } from 'react';

export default function Top10Movies() {
    const [topTen, setTopTen] = useState([])
    useEffect(() => {
        fetch("/topTenMovies")
            .then((res) => res.json())
            .then((topTen) => {
                setTopTen(topTen.topTen);
                console.log(topTen);
            });
    }, [])
    return topTen.map(movie => (
        <div key={movie.ObjectID} className="topCard">
            <div className='topImage'>
                    <img src={movie.image} />
            </div>
            <div className='topInfo'>
                <div className='topTitle'>{movie.name}</div>
                <div></div>
                <div className='topCategory'>{movie.category}</div>
                <div className='topYear'>{movie.year}</div>
                <div className='topRating'>{movie.rating}</div>
                <div className='topDescription'>{movie.description}</div>
            </div>
        </div>
    ));
}
