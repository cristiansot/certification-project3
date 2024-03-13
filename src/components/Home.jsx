import React from "react";

const Home = ({ sendQuiz }) => {

  const handleClick = () => {
    sendQuiz(window.location.href = "/quizzes");
  }

  return (
    <div>
      <h1 className='mainTitle'>Quiz<br />Game</h1>
      <div className="quizPlayContent"> 
       <button className="quizPlayBtn" onClick={handleClick}>Play</button> 
      </div>
    </div>
  );
};

export default Home
