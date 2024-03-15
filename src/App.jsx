 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import QuizGame from './components/QuizGame';
import Login from './components/Login';
import SignIn from './components/SignIn';
import './assets/css/app.css';

let quizzes = [ //I changed for let for to make modifications
  {
    "id": 1,
    "name": "Quiz name 1",
    "questions": [
      {
        "id": 2,
        "question": "This is a question 1?",
        "points": 5,
        "options": [
          { "textAnswer": "Answer 1", "isCorrect": true },
          { "textAnswer": "Answer 2", "isCorrect": false },
          { "textAnswer": "Answer 3", "isCorrect": false },
          { "textAnswer": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 3,
        "question": "Question 2",
        "points": 5,
        "options": [
          { "textAnswer": "Answer 1", "isCorrect": true },
          { "textAnswer": "Answer 2", "isCorrect": false },
          { "textAnswer": "Answer 3", "isCorrect": false },
          { "textAnswer": "Answer 4", "isCorrect": false }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Quiz name 2",
    "questions": [
      {
        "id": 5,
        "question": "Question 1",
        "points": 5,
        "options": [
          { "textAnswer": "Answer 1", "isCorrect": true },
          { "textAnswer": "Answer 2", "isCorrect": false },
          { "textAnswer": "Answer 3", "isCorrect": false },
          { "textAnswer": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 6,
        "question": "Question 2",
        "points": 5,
        "options": [
          { "textAnswer": "Answer 1", "isCorrect": true },
          { "textAnswer": "Answer 2", "isCorrect": false },
          { "textAnswer": "Answer 3", "isCorrect": false },
          { "textAnswer": "Answer 4", "isCorrect": false }
        ]
      }
    ]
  }
];

const App = () => {

  const [data, setData] = useState(quizzes);
  
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes quizzes={quizzes}/>} />
          <Route path="/quizGame/:id" element={<QuizGame quizzes={quizzes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
