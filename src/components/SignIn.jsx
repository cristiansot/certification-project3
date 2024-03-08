import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
import '../assets/css/login.css'

YupPassword(Yup)

const schema = Yup.object({
  newUserName: Yup.string().required('Required'),
  newUserPassword: Yup.string().password().required('Required'),
  confirmNewUserPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignIn = ({ getData }) => {

  const send = (values, { resetForm }) => {

  };
  
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      newUserName: '',
      newUserPassword: '',
      confirmNewUserPassword: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });

  return (
    <div className='wrapperLogin'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsLogin'>
        <h1>Sign in</h1>
          <input className='inputUserName' type="text" placeholder='Name' name='newUserName' value={values.newUserName} onChange={handleChange} />
          <div>{errors.newUserName && <span>{errors.newUserName}</span>}</div>
          <input className='inputUserPassword' type="text" placeholder='Password' name='newUserPassword' value={values.newUserPassword} onChange={handleChange} />
          <div>{errors.newUserPassword && <span>{errors.newUserPassword}</span>}</div>
          <input className='inputConfirmUserPassword' type="text" placeholder='Confirm Password' name='confirmNewUserPassword' value={values.confirmNewUserPassword} onChange={handleChange} />
          <div>{errors.nconfirmNewUserPassword && <span>{errors.confirmNewUserPassword}</span>}</div>
          <button className='btn' type='submit'>Sign in</button>
        </div> 
      </form>
    </div>
  );
};

export default SignIn;