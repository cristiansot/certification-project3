import React from "react";
import { useParams } from "react-router-dom";
import '../assets/css/quizGame.css';
import quiz from '../../data/quiz.json';

const QuizGame = () => {
  const { id } = useParams(); 
  console.log(id);
  
  return (
    <div className="quizGameWrapper">
      <h1>Game Quiz id: {id}</h1>
      {/* <h1>{quizName}</h1>
      <div><h1>{id}</h1></div> */}
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