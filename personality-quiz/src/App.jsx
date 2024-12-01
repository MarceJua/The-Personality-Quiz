import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import './App.css'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <UserForm />
        {/* Other components */}
      </BrowserRouter>
    </UserProvider>
  );
}

export default App
