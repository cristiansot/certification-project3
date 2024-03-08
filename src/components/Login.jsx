import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/login.css'

const schema = Yup.object({
  userName: Yup.string().required('Required'),
  userPassword: Yup.number().required('Required'),
});

const login = ({ getData }) => {

  const send = (values, { resetForm }) => {

  //   axios.post('http://localhost:3001/currency', values)
  //   .then(function (response) {
  //     // console.log(response);
  //     alert('Currency Added Successfully');
  //     getData(values);
  //     console.log(response);
  //     resetForm(); 
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
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
          <input className='inputUserPassword' type="number" placeholder='Password' name='userPassword' value={values.userPassword} onChange={handleChange} />
          <button className='btn' type='submit'>Login</button>
          <div>{errors.userName && <span>{errorsuserName}</span>}</div>
          <div>{errors.userPassword && <span>{errors.userPassword}</span>}</div>
        </div> 
      </form>
    </div>
  );
};

export default login;