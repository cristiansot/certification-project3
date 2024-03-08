import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/signIn.css'

const schema = Yup.object({
  newUserName: Yup.string().required('Required'),
  newUserPassword: Yup.number().required('Required'),
});

const SignIn = ({ getData }) => {

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
      newUserName: '',
      newUserPassword: '',
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='wrapperSignIn'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsSignIn'>
        <h1>Sign in</h1>
          <input className='inputNewUserName' type="text" placeholder='Enter your Name' name='NewUserName' value={values.newUserName} onChange={handleChange} />
          <div>{errors.newUserName && <span>{errors.newUserName}</span>}</div>
          <input className='inputNewUserPassword' type="text" placeholder='Password' name='userPassword' value={values.newUserPassword} onChange={handleChange} />
          <div>{errors.newUserPassword && <span>{errors.newUserPassword}</span>}</div>
          <button className='btn' type='submit'>Login</button>  
        </div> 
      </form>
    </div>
  );
};

export default SignIn;