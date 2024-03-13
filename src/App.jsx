import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import QuizGame from './components/QuizGame';
import Login from './components/Login'
import SignIn from './components/SignIn'
import './assets/css/app.css';

const App = () => {
  const [login, setLogin] = useState();
  const [signIn, setSignIn] = useState();
  const [home, setHome] = useState();
  const [quiz, setQuiz] = useState();


  const sendLogin = () => {
    setLogin();
  }

  const sendSignIn = () => {
    setSignIn();
  }

  const sendHome = () => {
    setHome();
  }

  const sendQuiz = () => {
    setQuiz();
  }

  return (
    <>
      <NavBar sendLogin={sendLogin} sendSignIn={sendSignIn} sendHome={sendHome} />
      <Quizzes />
      <Router>    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home sendQuiz={sendQuiz} />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/game" element={<QuizGame />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;


