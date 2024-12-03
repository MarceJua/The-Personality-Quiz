import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { UserProvider, UserContext } from './components/UserContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import Question from './components/Question';
import Result from './components/Result';
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState('');
  const [artwork, setArtwork] = useState(null);
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

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
  setAnswers((prevAnswers) => [...prevAnswers, answer]);
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  } else {
    const finalElement = determineElement([...answers, answer]);
    setElement(finalElement);
    navigate('/results');
  }
};

const handleUserFormSubmit = (name) => {
  setUserName(name);
  navigate('/quiz');
};

const fetchArtwork = async (keyword) => {
  try {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`);
    const data = await response.json();

    if (data.objectIDs && data.objectIDs.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.objectIDs.length);
      const objectID = data.objectIDs[randomIndex];
      const artworkResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
      const artworkData = await artworkResponse.json();

      if (artworkData.primaryImage) {
        setArtwork(artworkData);
        return;
      }
    }

    // Backup: Dog API
    const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogData = await dogResponse.json();
    setArtwork({
      primaryImage: dogData.message,
      title: ' ',
      artistDisplayName: ' ',
      objectDate: ' ',
    });
  } catch (error) {
    console.error("Error fetching artwork:", error);
    setArtwork(null);
  }
};

const determineElement = (answers) => {
  const counts = {};
  answers.forEach((answer) => {
    const element = elements[answer];
    counts[element] = (counts[element] || 0) + 1;
  });
  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
};

useEffect(() => {
  if (currentQuestionIndex === questions.length) {
    const selectedElement = determineElement(answers);
    setElement(selectedElement);
    fetchArtwork(keywords[selectedElement]);
  }
}, [currentQuestionIndex]);

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
        <Route
          path="/quiz"
          element={
            currentQuestionIndex < questions.length ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Result element={element} artwork={artwork} />
            )
          }
        />
        <Route path="/results" element={<Result element={element} artwork={artwork} />} />
      </Routes>
    </UserProvider>
  );
}

export default App
