import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='mainTitle'>Quiz<br />Game</h1>
      <div className="quizPlayContent"> 
        <Link to="/quizzes" className="quizPlayBtn">Play Quizzes</Link>
      </div>
    </div>
  );
};

export default Home;
