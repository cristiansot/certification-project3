import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/quizGame.css'

const QuizGame = ({ dataScore, quiz, totalScore }) => {

  const lastDataTotalScore = totalScore[totalScore.length - 1];

  // console.log('Total Score: ' + totalScore)
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  useEffect(() => {
    dataScore(score)
    // console.log(dataScore)
  }, [score]);

  const { id } = useParams();//This is a text strings  
  // console.log(id);

  const findQuiz = quiz.find((e) => e.id === id);
  // console.log(findQuiz)

  const { questions } = findQuiz
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
    localStorage.setItem('score', JSON.stringify(lastDataTotalScore))
  }

  const handleComeBack = () => {
    localStorage.setItem('score', JSON.stringify(lastDataTotalScore))
  }

  if(gameIsOver)
    return (
      <div className="quizGameWrapper">
        <h1 className="score">
          You got {score} points
        </h1>

        <Link to={`/quizGame/${id}`}>
          <button onClick={handleSubmit} className='createBtn'>Play Again</button>
        </Link>
        
        <Link to={"/quizzes"}>
          <button onClick={handleComeBack} className='createBtn'>go to quizzes</button>
        </Link>

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