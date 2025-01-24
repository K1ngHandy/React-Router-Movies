import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const style = { margin: '1rem', padding: '1rem', border: '1px solid black' };

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          console.log('Movies:', response.data);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addSaved = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (!saved.includes(id)) {
      const movie = movies.find(movie => movie.id === id);
      setSaved([...saved, movie]);
    } else {
      alert('Movie already saved');
    }
  };

  const navigateHome = () => {
    navigate('/');
  };

  const detailCard = id => {
    navigate(`movies/${id}`);
  };

  return (
    <div>
      <SavedList list={saved} navigateHome={navigateHome} />
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <MovieList 
            movies={movies} 
            detailCard={detailCard} 
            saveMovie={addSaved} 
          />} 
        />
        <Route path="movies/:id" element={<Movie addSaved={addSaved} movies={movies} />} />
      </Routes>
    </div>
  );
}
