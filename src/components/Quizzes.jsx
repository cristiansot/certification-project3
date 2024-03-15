import React from 'react';
import Crud from './Crud'
import '../assets/css/quizzes.css'

const Quizzes = ({ quizzes }) => {
  
  return (
    <>
    <div className='contentBtn'>
      <button className='createBtn'>Create Quiz</button>
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
