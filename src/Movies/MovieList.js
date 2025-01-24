import React from 'react';

import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { movies, detailCard, saveMovie } = props;
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails 
          key={movie.id} 
          movie={movie} 
          detailCard={detailCard} 
          saveMovie={saveMovie} 
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { movie, detailCard, saveMovie } = props;

  return (
    <MovieCard 
      key={movie.id}
      movie={movie} 
      onClick={() => detailCard(movie.id)} 
      saveMovie={saveMovie} 
      showStars={true}
    />
  );
}
