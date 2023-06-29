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

    return data.map(movie => (
        <div key={movie._id} className="filmCard allMovies">
            <div className='filmImage'>
                <div className='imgFrontside'>
                    <img src={movie.image} />
                    <div className='filmRating'>{movie.rating}
                        <div className='setRating' onClick={(event) => setRating(movie._id, event)}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
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

function setRating(id, event) {
    const value = event.target.textContent;
    console.log(id + " " + value);
/*
    fetch(`/updateRating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: value })
    })
    .then((res) => {
        if (res.ok) {
            console.log("Rating updated successfully");
        } else {
            console.log("Failed to update rating");
        }
    })
    */
};


