import React from 'react';
import Crud from './Crud'
import quiz from '../../data/quiz.json'


// Create a button component that has the title as a prop, this will be the question that will read from the database

//I need a function to constantly read the database to know if there are changes

//I need a function that, once the quiz is created, diplay the new button on the screen


const Quizzes = () => {
    return (
        <div className='wrapperBtns'>
            {quiz.map(quiz => (
               <Crud 
                key={quiz.id}
                name={quiz.name}
               />
            ))}
        </div>
    );
};

export default Quizzes;
