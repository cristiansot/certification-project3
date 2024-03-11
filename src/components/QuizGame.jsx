import React from "react";
import { useState, useEffect } from "react";
import quiz from '../../data/quiz.json' 

const QuizGame = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  
    return (
      <div className='quizGameWrapper'>
        <div><h1>Quiz Title</h1></div>
        <div><h2>{currentQuestion + 1}</h2></div>
        <div className="answers">
          {quiz[currentQuestion].options.map((answer) => (
            <button> {answer.textAnswer} </button>
          ))}
        </div>
      </div>
    );
  };

export default QuizGame;