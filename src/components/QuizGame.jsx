import React from "react";
import { useParams } from "react-router-dom";
import quiz from '../../data/quiz.json';
import '../assets/css/quizGame.css'

const QuizGame = () => {

  // const [score, setScore] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [gameIsOver, setGameIsOver] = useState(false);

  const { id } = useParams();//This is a text strings
  console.log(id);
  
  const quizId = parseInt(id);//I had to transform into a number

  const findQuiz = quiz.find((e) => e.id === quizId);
  console.log(findQuiz)
  
  return (
    <div className="quizGameWrapper">
      <div>
        <h1 className="quizName">{findQuiz.name}</h1>
      </div>

      <div>
        <h2 className="quizName">{findQuiz.question}</h2>
      </div>
     
      <h2></h2>
    </div>
  );
};

export default QuizGame;


// "id": 1,
// "name": "Quiz name 1",
// "questions": [
//   {
//     "id": 2,
//     "question": "Question 1",
//     "points": 5,
//     "options": [
//       { "textAnswer": "Answer 1", "isCorrect": true },
//       { "textAnswer": "Answer 2", "isCorrect": false },
//       { "textAnswer": "Answer 3", "isCorrect": false },
//       { "textAnswer": "Answer 4", "isCorrect": false }
//     ]