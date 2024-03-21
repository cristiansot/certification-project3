import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormQuestions from './FormQuestions';
import '../assets/css/create.css';

const schema = Yup.object({
  name: Yup.string().required('Required'),
});

const Create = () => {

  const send = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const { handleSubmit, handleChange, errors, values, setFieldValue } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='contentInputsLogin'>
      <form onSubmit={handleSubmit}>
        <h1 className='createQuizTitle'>Create Quiz</h1>
        <input className='name' type="text" placeholder='Name of the Quiz' />

        <FormQuestions />

        <div className='btn'> 
          <button className='createBtn'>Create Quiz</button>
        </div>
      </form>
    </div> 
  )};

export default Create;
