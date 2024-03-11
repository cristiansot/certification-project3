import React from 'react';
import NavBar from './components/NavBar';
import Quizzes from './components/Quizzes'
// import QuizGame from './components/QuizGame'
import './assets/css/app.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Quizzes/>
      {/* <QuizGame /> */}
    </div>
  );
};

export default App;
