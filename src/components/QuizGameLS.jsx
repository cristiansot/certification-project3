import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/quizGame.css'

const QuizGame = ({ quiz }) => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const { id } = useParams();
  // console.log(id);
  
  const findQuiz = quiz.find((e) => e.id === id);
  // console.log(findQuiz)

  const { questions } = findQuiz;
  // console.log(questions);

  function HandlerAnswer(isCorrect, e) {
    if(isCorrect) setScore(score + 5);
    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    setTimeout(() => {
      if(currentQuestion === questions.length -1) {
        setGameIsOver(true);
      } else {
        setCurrentQuestion(currentQuestion +1);
      }
    }, 500)
  }

  if(gameIsOver)
    return (
      <div className="quizGameWrapper">
        <h1 className="score">
          You got {score} points
        </h1>
        <button onClick={() => (window.location.href = `/quizGameLS/${id}` )}>
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