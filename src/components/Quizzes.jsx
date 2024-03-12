import React from 'react';
import quiz from '../../data/quiz.json'


// Create a button component that has the title as a prop, this will be the question that will read from the database

//I need a function to constantly read the database to know if there are changes

//I need a function that, once the quiz is created, diplay the new button on the screen


const Quizzes = () => {
    return (
        <div className='wrapperBtns'>
            {quiz.map((quizName) => (
                <button key={quizName.name}>{quizName.name}</button>
            ))}
        </div>
    );
};

export default Quizzes;
