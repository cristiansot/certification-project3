import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/login.css';

const schema = Yup.object({
  question: Yup.string().required('Required'),
  options: Yup.array().of(Yup.string().required('Required')),
});

const FormQuestions = () => {
  const send = (values) => {
    console.log(values);
  };
  
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      question: '',
      options: ['', '', '', ''] 
    },
    validationSchema: schema,
    onSubmit: send,
  });

/** I saw this documentation and videos for to understand how to develop the form
 * https://formik.org/docs/guides/arrays
 * www.youtube.com/watch?v=Or0rljWUyEM&ab_channel=EWebik
 * https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev
**/

  return (
    <div className='wrapperLogin'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsLogin'>
          <h1>Create Questions</h1>

          <input className='inputUserName' type="text" placeholder='Write the Question' name='question' value={values.question} onChange={handleChange} />
          <div>{errors.question && <span>{errors.question}</span>}</div>

          <input className='inputUserName' type="text" placeholder='Text Answer' name='options[0]' value={values.options[0]} onChange={handleChange} />
          <div>{errors.options && <span>{errors.options[0]}</span>}</div>

          <input className='inputUserName' type="text" placeholder='Text Answer' name='options[1]' value={values.options[1]} onChange={handleChange} />
          <div>{errors.options && <span>{errors.options[1]}</span>}</div>

          <input className='inputUserName' type="text" placeholder='Text Answer' name='options[2]' value={values.options[2]} onChange={handleChange} />
          <div>{errors.options && <span>{errors.options[2]}</span>}</div>

          <input className='inputUserName' type="text" placeholder='Text Answer' name='options[3]' value={values.options[3]} onChange={handleChange} />
          <div>{errors.options && <span>{errors.options[3]}</span>}</div>
         
          <button className='btn' type='submit'>Add Another Question</button>
        </div> 
      </form>
    </div>
  );
};

export default FormQuestions;


