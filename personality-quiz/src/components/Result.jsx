import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import './styles/Result.css';

export default function Result({ element, artwork }) {
  const { userName } = useContext(UserContext);
  const [fallbackArtwork, setFallbackArtwork] = useState(null);

  useEffect(() => {
    if (!artwork) {
      fetchFallbackImage();
    }
  }, [artwork]);

  const fetchFallbackImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setFallbackArtwork({
        primaryImage: data.message,
        title: ' ',
        artistDisplayName: ' ',
        objectDate: ' ',
      });
    } catch (error) {
      console.error('Error fetching fallback image:', error);
    }
  };

  const displayedArtwork = artwork || fallbackArtwork;

  return (
    <div className="results-container">
      <p>
        <strong>{userName}</strong>, your personality is: <strong>{element}</strong>
      </p>
      {displayedArtwork ? (
        <div className="artwork">
          <img src={displayedArtwork.primaryImage} alt={displayedArtwork.title} />
        </div>
      ) : (
        <p>Loading artwork...</p>
      )}
    </div>
  );
}