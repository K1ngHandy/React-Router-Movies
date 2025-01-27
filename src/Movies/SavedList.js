import React from 'react';

export default function SavedList(props) {
  const { navigateHome, resetSaved, list } = props;
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
      <div className="scroll-container" 
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          maxWidth: '45vw', 
          overflow: 'auto',
          whiteSpace: 'nowrap',
          maxHeight: '5.5vh',
        }}>
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
      </div>
      <div className="button-container">
        <div className="home-button" onClick={navigateHome}>Home</div>&nbsp;
        <div className="clear-button" onClick={resetSaved}>Clear</div>
      </div>
    </div>
  );
}
