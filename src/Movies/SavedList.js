import React from 'react';

export default function SavedList(props) {
  const { navigateHome, list } = props;
  const entityId = {
    '1': 'tt0068646',
    '2': 'tt0076759',
    '3': 'tt0120737',
    '4': 'tt0103064',
    '5': 'tt0109686',
    '6': 'tt0108358',
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <span key={movie.id} className="saved-movie">
          <a 
            href={`https://www.imdb.com/title/${entityId[movie.id]}/reference/`}
            target= '_blank'
            rel='noopener noreferrer'
          >
            {movie.title}
          </a>
        </span>
      ))}
      <div className="home-button" onClick={navigateHome}>Home</div>
    </div>
  );
}
