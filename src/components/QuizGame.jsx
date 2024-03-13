import React from "react";
import { useState, useEffect } from "react";

const QuizGame = ({ id, name}) => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  
    return (
      <div className='quizGameWrapper'>
        <h1>{name}</h1>
        <div><h1>{id}</h1></div>
      </div>
    );
  };

export default QuizGame
