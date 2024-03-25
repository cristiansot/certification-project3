import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/quizGame.css'

const QuizGame = ({ quizzes, dataScore, totalScore }) => {

  // console.log('Total Score: ' + totalScore)
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  useEffect(() => {
    dataScore(score);
    // console.log(dataScore)
  }, [score]);

  const { id } = useParams();//This is a text strings  
  // console.log(id);

  const quizId = parseInt(id);//I had to transform into a number
  // console.log(quizId);

  const findQuiz = quizzes.find((e) => e.id === quizId);
  // console.log(findQuiz)

  const { questions } = findQuiz;
  // console.log(questions);

  function HandlerAnswer(isCorrect, e) {
    if(isCorrect) setScore(score + 5);
    e.target.classList.add(isCorrect ? "correct" : "incorrect")
    //Change next question

    setTimeout(() => {
      if(currentQuestion === questions.length -1) {
        setGameIsOver(true);
      } else {
        setCurrentQuestion(currentQuestion +1);
      }
    }, 300)
  }

  const handleSubmit = () => {
    window.location.href = `/quizGame/${id}`;
    // const lastData = totalScore[totalScore.length - 1];
    localStorage.setItem('score', JSON.stringify(totalScore))
  }

  if(gameIsOver)
    return (
      <div className="quizGameWrapper">
        <h1 className="score">
          You got {score} points
        </h1>
        <button onClick={handleSubmit}>
          Play Again
        </button>
        <button onClick={() => (window.location.href = "/quizzes" )}>
          Go to Quizzes
        </button>
      </div>
    );

  return (
    <div className="quizGameWrapper">
      <div>
        <h1 className="quizName">{findQuiz.name}</h1>
      </div>

      <div className="numberQuestions">
        <span>Question {currentQuestion + 1} of</span> {questions.length}
      </div>

      <div className="questions">
        <h2>{questions[currentQuestion].question}</h2>
      </div>
     
      <div className="quizGameBtns">
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