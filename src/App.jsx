import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import './assets/css/app.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Quizzes />
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes/:quizzes" element={<Quizzes />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;
