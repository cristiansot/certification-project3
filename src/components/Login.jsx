import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/login.css'

const schema = Yup.object({
  userName: Yup.string().required('Required'),
  userPassword: Yup.string().required('Required'),
});

const login = ({ getData }) => {

  const send = (values, { resetForm }) => {

  };
  
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      userName: '',
      userPassword: '',
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='wrapperLogin'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsLogin'>
        <h1>Login</h1>
          <input className='inputUserName' type="text" placeholder='Name' name='userName' value={values.userName} onChange={handleChange} />
          <div>{errors.userName && <span>{errors.userName}</span>}</div>
          <input className='inputUserPassword' type="text" placeholder='Password' name='userPassword' value={values.userPassword} onChange={handleChange} />
          <div>{errors.userPassword && <span>{errors.userPassword}</span>}</div>
          <button className='btn' type='submit'>Login</button>
        </div> 
      </form>
    </div>
  );
};

export default login;