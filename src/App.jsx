import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import QuizGame from './components/QuizGame';
import Login from './components/Login';
import SignIn from './components/SignIn';
import './assets/css/app.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/game" element={<QuizGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
