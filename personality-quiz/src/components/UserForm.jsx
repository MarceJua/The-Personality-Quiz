import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import './styles/UserForm.css';

export default function UserForm() {
    const [inputName, setInputName] = useState('');
    const { setUserName } = useContext(UserContext);
    const navigate = useNavigate();

  
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(inputName); // Set userName
        navigate('/quiz'); // Navigate to quiz page
      };
  
    return (
      <form onSubmit={handleSubmit} className="user-form">
        <label>
          Enter your name:
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="user-input"
          />
        </label>
        <button type="submit" className="submit-button">Start Quiz</button>
      </form>
    );
  }