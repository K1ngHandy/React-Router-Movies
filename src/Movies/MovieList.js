import React from 'react';

import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { movies, detailCard } = props;
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails 
          key={movie.id} 
          movie={movie} 
          detailCard={detailCard} 
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { movie, detailCard } = props;

  return (
    <MovieCard 
      key={movie.id}
      movie={movie} 
      detailCard={detailCard}
      showStars={false}
    />
  );
}
