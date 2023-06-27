import React, { useState, useEffect } from 'react';
import "./App.css";
import AllMovies from "./components/AllMovies.js";
import Top10Movies from "./components/Top10Movies.js";
import logo from './filmbase.png';



function App() {

  const [showAllMovies, setShowAllMovies] = useState(true);

  function toggleMovies() {
    setShowAllMovies(!showAllMovies);
  }

  return (
    <div className="App">
      <div className="header">
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <div className='changeFilms'>
          <a href="#" onClick={toggleMovies}>{showAllMovies ? 'TOP10' : 'ALL MOVIES'}</a>
        </div>
      </div>

      <div className='Movies'>
        {showAllMovies ? <AllMovies /> : <Top10Movies />}
      </div>
    </div>
  );
}

export default App;
