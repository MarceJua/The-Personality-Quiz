# The-Personality-Quiz

## Overview

The Personality Quiz is a React-based web application that allows users to take a quiz to determine their personality type. The quiz consists of multiple questions, and based on the user's answers, it calculates the most fitting personality element. The application also fetches artwork related to the personality element from the MET Museum API or displays a random dog image as a fallback.

![Personality Quiz](https://i.ibb.co/4MzKb4f/chrome-capture-2024-12-2.gif)

## Features

- Multiple-choice quiz with various questions
- User name input for personalization
- Context API for managing user state
- Displays fallback artwork from the Dog CEO API
- Responsive and styled components

## Setup

### Prerequisites

- Node.js and npm installed on your machine

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/The-Personality-Quiz.git
   cd spotify-artist-search
2. Install dependencies:
   ```bash
   npm install

## Usage

1. Enter your name on the home page and click "Start Quiz".
2. Answer the quiz questions by selecting one of the options.
3. After completing the quiz, your personality element and related artwork will be displayed.


## Project Structure
The-Personality-Quiz/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserContext.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Question.css
│   │   ├── Result.css
│   │   ├── UserForm.css
├── package.json
├── [README.md]

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.