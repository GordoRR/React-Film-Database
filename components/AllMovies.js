import React, { useState, useEffect } from 'react';

export default function AllMovies() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/listMovies")
            .then((res) => res.json())
            .then((data) => {
                setData(data.movies);
                console.log(data);
            });
    }, [])
    function setRating(id, event){
        const value = event.target.textContent;
        console.log(id + " " + value);
    }
    return data.map(movie => (
        <div key={movie._id} className="filmCard allMovies">
            <div className='filmImage'>
                <div className='imgFrontside'>
                    <img src={movie.image} />
                    <div className='filmRating'>{movie.rating}
                    </div>
                </div>
                <div className='imgBackside'>
                    <div className='filmDescription'></div>
                </div>
            </div>
            <div className='filmInfo'>
                <div className='filmTitle'>{movie.name}</div>
                <div className='filmCategory'>{movie.category}</div>
                <div className='filmYear'>{movie.year}</div>
                <div className='filmFootage'>{movie.footage}min.</div>
            </div>
        </div>
    ));
}

