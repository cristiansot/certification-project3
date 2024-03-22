import React from 'react';
import { Link } from 'react-router-dom'
import Crud from './Crud'
import CrudLocalStorage from './CrudLocalStorage'
import '../assets/css/quizzes.css'

const Quizzes = ({ quizzes, quiz }) => {
  
  return (
    <>
    <div className='contentBtn'>
      <Link to={"/create"}>
       <button className='createBtn'>Create Quiz</button>
      </Link>
    </div>
    <div className='wrapperBtns'>
        {quizzes.map(quizzes => (
          <Crud 
          key={quizzes.id}
          id={quizzes.id}
          name={quizzes.title}
          />
        ))}
    </div>

    <div className='wrapperBtns'>
        {quiz.map((quiz, index) => (
          <CrudLocalStorage
          key={index}
          id={quiz.id}
          name={quiz.title}
          />
        ))}
    </div>
    </>
  );
};

export default Quizzes;
