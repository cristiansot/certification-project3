import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizGame from './QuizGame'
import '../assets/css/crud.css'

const Crud = ({ id, name, question }) => {

  const handleClick = () => {

    console.log('works');
    console.log(id);
  }

  return (
    <Router>
      <div className="containerCrud">
        <h1>{name}</h1>
        <button className="playBtn" id={id} onClick={handleClick}>Play</button>
        <button className="editBtn" id={id}>Edit</button>
        <button className="deleteBtn" id={id}>Delete</button>
     </div>

      <Routes>
        <Route path="/quizGame" element={<QuizGame id={id} name={name} question={question} />} />
      </Routes>
    </Router>
  )
}

export default Crud