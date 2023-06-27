import React, { useState, useEffect } from 'react';
import "./App.css";



function App() {
  const [data, setData] = React.useState([]);
  const [topTen, setTopTen] = React.useState([])
  const [showAllMovies, setShowAllMovies] = useState(true);
  React.useEffect(() => {
    fetch("/listMovies")
      .then((res) => res.json())
      .then((data) => {
        setData(data.movies);
        console.log(data);
      });
      fetch("/topTenMovies")
      .then((res) => res.json())
      .then((topTen) => {
        setTopTen(topTen.movies);
        console.log(topTen);
      });
  }, [])
  function getListMovies(data) {
    return data.map(movie => (
      <div key={movie.ObjectID} className={`filmCard ${showAllMovies ? '' : 'hidden'}`}>
        <div className='filmImage'>
          <div className='imgFrontside'>
            <img src={movie.image} />
            <div className='filmRating'>{movie.rating}</div>
          </div>
          <div className='imgBackside'>
            <div className='filmDesription'></div>
          </div>
        </div>
        <div className='filmInfo'>
          <div className='filmTitle'>{movie.name}</div>
          <div className='filmCategory'>{movie.category}</div>
          <div className='filmYear'>{movie.year}</div>
        </div>
      </div>
    ));
  }
  function getTopTen(topTenMovies){
    return topTenMovies.map(movie => (
      <div key={movie.ObjectID} className={`filmCard ${showAllMovies ? '' : 'hidden'}`}>
        <div className='filmImage'>
          <div className='imgFrontside'>
            <img src={movie.image} />
            <div className='filmRating'>{movie.rating}</div>
          </div>
          <div className='imgBackside'>
            <div className='filmDesription'></div>
          </div>
        </div>
        <div className='filmInfo'>
          <div className='filmTitle'>{movie.name}</div>
          <div className='filmCategory'>{movie.category}</div>
          <div className='filmYear'>{movie.year}</div>
        </div>
      </div>
      ));
  }
  function toggleMovies() {
    setShowAllMovies(!showAllMovies);
  }

  return (
    <div className="App">
      <div className="header">
        <nav>
          <ul>
            <li> <a href="#" onClick={toggleMovies}>{showAllMovies ? 'TOP10' : 'ALL'}</a></li>
          </ul>
        </nav>
      </div>

      <div className='Movies'>
      {showAllMovies ? getListMovies(data) : console.log(topTen)}
      </div>
    </div>
  );
}

export default App;
