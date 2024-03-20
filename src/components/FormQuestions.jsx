import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/login.css'

const schema = Yup.object({
  question: Yup.string().required('Required'),
  textAnswer: Yup.string().required('Required'),
  //I need to put the options inside an array
});

const FormQuestions = () => {

  const send = (values) => {

  };
  
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      question: '',
      options: []
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='wrapperLogin'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsLogin'>
        <h1>Create Quiz</h1>
          <input className='inputUserName' type="text" placeholder='Text Answer' name='textAnswer' onChange={handleChange} />
          <div>{errors.textAnswer && <span>{errors.textAnswer}</span>}</div>

         
          <button className='btn' type='submit'>Add Another Question</button>
        </div> 
      </form>
    </div>
  );
};
    
export default FormQuestions;