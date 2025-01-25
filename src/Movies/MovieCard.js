import React from 'react';

export default function MovieCard (props) {
  const { movie, detailCard, addToSaved, showStars } = props;
  const { title, director, metascore, stars } = movie;

  return (
    <>
      {showStars === true ? (
          <div className="save-wrapper">
            <div className="movie-card">
              <h2>{title}</h2>
              <div className="movie-director">
                Director: <em>{director}</em>
              </div>
              <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
              </div>
              <h3>Actors</h3>

              {stars && stars.map(star => (
                <div key={star} className="movie-star">
                  {star}
                </div>
              ))}
              <div className="save-button" onClick={() => addToSaved(movie.id)}>Save</div>
            </div>
          </div>
        ) : (
          <div className="save-wrapper">
            <div className="movie-card" onClick={() => detailCard(movie.id)}>
              <h2>{title}</h2>
              <div className="movie-director">
                Director: <em>{director}</em>
              </div>
              <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
