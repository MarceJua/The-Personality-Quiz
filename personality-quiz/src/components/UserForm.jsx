import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import './styles/UserForm.css';

export default function UserForm() {
    const [inputName, setInputName] = useState('');
    const { setUserName } = useContext(UserContext);
  
    function handleSubmit(e) {
      e.preventDefault();
      setUserName(inputName);  // Set the name in context
      window.history.pushState({}, '', '/quiz');  // Change the URL without reloading the page
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);  // Dispatch a navigation event
      console.log(`UserName set: ${inputName}`);
    }
  
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