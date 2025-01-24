import React from 'react';

export default function MovieCard ({ movie, saveMovie, showStars }) {
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>

        {showStars && (
          <>
            <h3>Actors</h3>

            {stars && stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </>
        )}
      </div>
    <div className="save-button" onClick={() => saveMovie(movie.id)}>Save</div>
  </div>
  );
}
