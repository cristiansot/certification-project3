import React from 'react';
import FormQuestions from './FormQuestions';
import '../assets/css/create.css'

const Create = () => {
/*I need to create ID*/
  
  return (
    <div >
        <div className='contentInputsLogin'>
        <h1 className='createQuizTitle'>Create Quiz</h1>
          <input className='name' type="text" placeholder='Name of the Quiz' />
    
        </div> 
        <FormQuestions />

        <div className='btn'> 
          <button className='createBtn'>Create Quiz</button>
        </div>
    </div>
  );
};
    
export default Create;