import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import FormQuestions from './FormQuestions';
import '../assets/css/create.css';

const schema = Yup.object({
  title: Yup.string().required('Title is required'),
});

const Create = () => {
  const [newData, setNewData] = useState([]);

  const getData = (data) => {
    setNewData(prevData => [...prevData, data]);
    console.log(data);
  };

  const send = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const { handleSubmit, handleChange, errors, values, setFieldValue } = useFormik({
    initialValues: {
      id: uuidv4(),
      title: '',
      questions: [],
    },
    validationSchema: schema,
    onSubmit: send,
  });

  useEffect(() => {
    if (newData.length > 0) {
      setFieldValue('questions', newData);
    }
  }, [newData, setFieldValue]);

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

      <FormQuestions getData={getData} />
    </div> 
  );
};

export default Create;


//www.youtube.com/watch?v=U3IJ7dsDVaE&ab_channel=Developero min 3:58

//LocalStorage
//www.youtube.com/watch?v=F6j_V6FUYTI&ab_channel=hdeleon.net