import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './styles/UserForm.css';

const UserForm = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div className="user-form-container">
      <p>User Name: {userName}</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="user-input"
      />
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default UserForm;