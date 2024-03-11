import React from 'react';
import NavBar from './components/NavBar';
// import Home from './components/Home'
import Quizzes from './components/Quizzes'
import './assets/css/app.css';

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Quizzes/>
    </div>
  );
};

export default App;
