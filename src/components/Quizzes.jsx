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
          name={quizzes.name}
          />
        ))}
    </div>

    <div className='wrapperBtns'>
        {quiz.map(quiz => (
          <CrudLocalStorage
          key={quiz.id}
          id={quiz.id}
          name={quiz.name}
          />
        ))}
    </div>
    </>
  );
};

export default Quizzes;
