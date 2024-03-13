import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../assets/css/crud.css'

const Crud = ({ id, name }) => {

  return (
    <div className="containerCrud">
      <h1>{name}</h1>
      <Link to={`/quizGame/${id}`} className="playBtn">Play</Link>
      <button className="editBtn" id={id}>Edit</button>
      <button className="deleteBtn" id={id}>Delete</button>
    </div>
  )
}

export default Crud
