import React from 'react';

const Create = () => {
//I need to create ID
  
  return (
    <div >
        <div className='contentInputsLogin'>
        <h1>Create Quiz</h1>
          <input className='name' type="text" placeholder='Name of the Quiz' onChange={handleChange} />
          //Import form questions
        </div> 
    </div>
  );
};
    
export default Create;