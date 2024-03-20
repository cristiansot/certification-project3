import React from 'react';
import FormQuestions from './FormQuestions';

const Create = () => {
/*I need to create ID*/
  
  return (
    <div >
        <div className='contentInputsLogin'>
        <h1>Create Quiz</h1>
          <input className='name' type="text" placeholder='Name of the Quiz' />
    
        </div> 
        <FormQuestions />
    </div>
  );
};
    
export default Create;