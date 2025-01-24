import React from 'react';

export default function SavedList(props) {
  const { navigateHome, list } = props;
  console.log('List:', list);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <span key={movie.id} className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={navigateHome}>Home</div>
    </div>
  );
}
