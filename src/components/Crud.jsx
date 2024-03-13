import { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/crud.css';

const Crud = ({ id, name}) => {

  return (
    <div className="containerCrud">
      <h1>{name}</h1>
      <Link to={`/quizGame/${id}`} className="playBtn" >
        Play
      </Link>
      <Link className="editBtn" id={id}>Edit</Link>
      <Link className="deleteBtn" id={id}>Delete</Link>
    </div>
  );
}

export default Crud;