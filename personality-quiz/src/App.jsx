import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider, UserContext } from './components/UserContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import Question from './components/Question';
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState('');
  const [artwork, setArtwork] = useState(null);
  const { userName, setUserName } = useContext(UserContext);

  const questions = [
    {
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      question: 'Which type of music do you prefer?',
      options: ['Pop', 'Rock', 'Classical', 'Hip-hop'],
  },
  {
      question: 'What is your ideal vacation destination?',
      options: ['Beach', 'Mountains', 'City', 'Countryside'],
  },
  {
      question: 'How do you like to spend your weekends?',
      options: ['Reading', 'Watching movies', 'Hiking', 'Gaming'],
  },
  {
      question: 'What is your go-to comfort food?',
      options: ['Pizza', 'Pasta', 'Burgers', 'Sushi'],
  },
  {
      question: 'Which season do you enjoy the most?',
      options: ['Spring', 'Summer', 'Autumn', 'Winter'],
  }
  ];

  // Keywords representing the personality traits/categories
const keywords = {
  Creativity: 'creativity',
  Adventure: 'adventure',
  Logic: 'logic',
  Relaxation: 'relaxation',
};

// Mapping each option to a corresponding keyword
const elements = {
  Red: 'Adventure',
  Blue: 'Relaxation',
  Green: 'Creativity',
  Yellow: 'Logic',

  Pop: 'Creativity',
  Rock: 'Adventure',
  Classical: 'Logic',
  Hiphop: 'Adventure',

  Beach: 'Relaxation',
  Mountains: 'Adventure',
  City: 'Creativity',
  Countryside: 'Relaxation',

  Reading: 'Logic',
  'Watching movies': 'Relaxation',
  Hiking: 'Adventure',
  Gaming: 'Creativity',

  Pizza: 'Creativity',
  Pasta: 'Relaxation',
  Burgers: 'Adventure',
  Sushi: 'Logic',

  Spring: 'Creativity',
  Summer: 'Adventure',
  Autumn: 'Logic',
  Winter: 'Relaxation',

  Painting: 'Creativity',
  Dancing: 'Adventure',
  Coding: 'Logic',
  Cooking: 'Relaxation',
};

const handleAnswer = (answer) => {
  setAnswers([...answers, elements[answer]]);
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    console.log('Quiz completed');
    calculateResult();
  }
};

const calculateResult = () => {
  const result = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {});

  const finalResult = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
  setElement(finalResult);
  console.log('Final Result:', finalResult);
  // Logic to display the final result
};

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route
          path="/quiz"
          element={
            <Question
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onAnswer={handleAnswer}
            />
          }
        />
        <Route path="/results" element={<h1>Results for {userName} Coming Soon!</h1>} />
      </Routes>
    </UserProvider>
  );
}

export default App
