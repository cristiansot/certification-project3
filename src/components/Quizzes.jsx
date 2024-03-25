import React from 'react';
import { Link } from 'react-router-dom'
import Crud from './Crud'
import '../assets/css/quizzes.css'

const Quizzes = ({ quiz }) => {
  
  return (
    <>
    <div className='contentBtn'>
      <Link to={"/create"}>
       <button className='createBtn'>Create Quiz</button>
      </Link>
    </div>
    <div className='wrapperBtns'>
        {quiz.map(quiz => (
          <Crud 
          key={quiz.id}
          id={quiz.id}
          name={quiz.title}
          />
        ))}
    </div>

    {/* <div className='wrapperBtns'>
        {quiz.map((quiz) => (
          <CrudLocalStorage
          key={quiz.id}
          id={quiz.id}
          name={quiz.title}
          />
        ))}
    </div> */}
    </>
  );
};

export default Quizzes;
