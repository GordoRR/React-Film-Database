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
    function setRating(id, event){
        const value = event.target.textContent;
        console.log(id + " " + value);
    }
    return topTen.map((movie, index) => (
        <div key={movie._id} className="topCard">
            <div className='topImage'>
                <img src={movie.image} />
                <div className='topIndex'>{`${index + 1}.`}</div>
            </div>
            <div className='topInfo'>
                <div className='topTitle'>{movie.name}</div>
                <div className='topFilmAttributes'>
                    <div className='topCategory'>{`${movie.category}`}</div>
                    <div className='topFootage'>{`${movie.footage} min.`}</div>
                    <div className='topYear'>{`Rok vydání: ${movie.year}`}</div>
                    <div className='topDescription'>{movie.description}</div>
                </div>
                <div className='topRating'>{movie.rating}
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
        </div>
    ));
}
