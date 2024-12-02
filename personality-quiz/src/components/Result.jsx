import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Results({ element, artwork }) {
  const { userName } = useContext(UserContext); // Access name from context

  return (
    <div className="results-container">
      <p>
        <strong>{userName}</strong>, your element is: <strong>{element}</strong>
      </p>
      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img src={artwork} alt={element} />
          <p>Explore more about your element!</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}