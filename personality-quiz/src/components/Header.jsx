import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Personality Quiz :) </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;