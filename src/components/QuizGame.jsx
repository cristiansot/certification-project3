import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/quizGame.css'

const QuizGame = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [gameIsOver, setGameIsOver] = useState(false);

  const { id } = useParams();//This is a text strings  
  const quizId = parseInt(id);//I had to transform into a number
  const findQuiz = quizzes.find((e) => e.id === quizId);
  console.log(findQuiz)

  const { questions } = findQuiz;
  console.log(questions);

  function HandlerAnswer(isCorrect, e) {
    if(isCorrect) setScore(score + 5);
    e.target.classList.add(isCorrect ? "correct" : "incorrect")
  }

  return (
    <div className="quizGameWrapper">
      <div>
        <h1 className="quizName">{findQuiz.name}</h1>
      </div>

      <div>
        <span>Question {currentQuestion + 1} of</span> {questions.lenght}
      </div>

      <div>
        <h2>{questions[currentQuestion].question}</h2>
      </div>
     
      <div>
        {questions[currentQuestion].options.map((answer) => (
          <button
            key={answer.textAnswer} className="answerBtn"
            onClick={(e) => HandlerAnswer(answer.isCorrect, e)}>
              {answer.textAnswer}
          </button>
        ))}
      </div>

    </div>
  );
};

export default QuizGame;