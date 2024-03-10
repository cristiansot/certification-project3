import React from 'react';

// This section will be two components in one

// Create a button component that has the title as a prop, this will be the question that will read from the database

//I need a function to constantly read the database to know if there are changes

//I need a function that, once the quiz is created, diplay the new button on the screen


const SelectQuizButtons = () => {
  
  return (
    <div className='wrapperBtns'>
      <button>Quiz 1</button>
      <button>Quiz 2</button>
    </div>
  );
};

export default SelectQuizButtons;