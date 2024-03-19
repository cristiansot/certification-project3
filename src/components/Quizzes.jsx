import React from 'react';
import { Link } from 'react-router-dom'
import Crud from './Crud'
import '../assets/css/quizzes.css'

const Quizzes = ({ quizzes }) => {
  
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
    </>
  );
};

export default Quizzes;
