import React from 'react';
import Crud from './Crud'
import { useState } from 'react';
import quiz from '../../data/quiz.json'
import '../assets/css/quizzes.css'

const Quizzes = () => {
  
  return (
    <>
    <div className='contentBtn'>
      <button className='createBtn'>Create Quiz</button>
    </div>
    <div className='wrapperBtns'>
        {quiz.map(quiz => (
          <Crud 
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
