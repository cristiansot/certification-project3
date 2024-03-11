import React from "react";
import quizzes from '../quizzes.json'

const QuizGame = () => {
  
    return (
      <div className='quizGameWrapper'>
        <div><h1>Quiz Title</h1></div>
        <div><h2>Question</h2></div>
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