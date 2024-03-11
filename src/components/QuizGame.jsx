import React from "react";
import { useState, useEffect } from "react";
import quizzes from '../quizzes.json'

const QuizGame = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  
    return (
      <div className='quizGameWrapper'>
        <div><h1>Quiz Title</h1></div>
        <div><h2>{currentQuestion + 1}</h2></div>
        <div className="answers">
          <button className="answerBtn">Option 1</button>
          <button className="answerBtn">Option 2</button>
          <button className="answerBtn">Option 3</button>
          <button className="answerBtn">Option 4</button>
        </div>
      </div>
    );
  };

export default QuizGame;