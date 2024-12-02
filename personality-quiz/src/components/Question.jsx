import React from 'react';
import './styles/Question.css';

export default function Question({ question, options, onAnswer }) {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}