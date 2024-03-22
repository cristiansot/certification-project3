import React from 'react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import FormQuestions from './FormQuestions';
import '../assets/css/create.css';

const schema = Yup.object({
  title: Yup.string().required('Title is required'),
});

const Create = () => {

  const [newData, setNewData] = useState();

  const getData = (data) => {
    setNewData(data)
    console.log(data)
  }

  const send = (values, { resetForm }) => {
    // console.log(values);
    resetForm();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='contentCreate'>
      <form className='createForm' onSubmit={handleSubmit}>
        <h1 className='createQuizTitle'>Create Quiz</h1>
        <input 
          className='name' 
          name='title' 
          type="text" 
          placeholder='Write the Title of the Quiz' 
          value={values.title} 
          onChange={handleChange}
        />
        
        {errors.title && <span>{errors.title}</span>}

        <div className='btn'> 
          <button className='createBtn' type='submit'>Create Quiz</button>
        </div>
      </form>

      <FormQuestions getData={ getData }/>

    </div> 
  );
};

export default Create;
