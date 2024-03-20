import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/form.css';

const schema = Yup.object({
  question: Yup.string().required('Required'),
  // options: Yup.array().of(Yup.string().required('Required')),
});

const FormQuestions = () => {
  const send = (values) => {
    console.log(values);
  };
  
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      question: '',
      options: [
        { "textAnswer": '', "isCorrect": ''},
        // { "textAnswer": '', "isCorrect": ''},
        // { "textAnswer": '', "isCorrect": ''},
        // { "textAnswer": '', "isCorrect": ''},
      ] 
    },
    validationSchema: schema,
    onSubmit: send,
  });

  const handleChangeCheckBox = (e) => {
    const value = e.target.value
    console.log(value)
  }

/** I saw this documentation and videos for to understand how to develop the form
 * https://formik.org/docs/guides/arrays
 * www.youtube.com/watch?v=Or0rljWUyEM&ab_channel=EWebik
 * https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev
 * https://www.youtube.com/watch?v=zw98_hVFpzE&ab_channel=RoyDigitalTech
**/

  return (
    <div className='wrapperForm'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsForm'>
          <h1>Create Questions</h1>

          <input className='inputWriteQuestion' type="text" placeholder='Write the Question' name='question' value={values.question} onChange={handleChange} />
          <div>{errors.question && <span>{errors.question}</span>}</div>

          <div className='inputForm'>
          <input className='inputTextAnswer' type="text" placeholder='Text Answer' name='options[0]' value={values.options} onChange={handleChange} />
          <div>{errors.options && <span>{errors.options[0]}</span>}</div>

          <input type='checkbox' value={true} name='isCorrect' onChange={handleChangeCheckBox}></input>

        </div>
          
         
          <button className='btn' type='submit'>Add Another Question</button>
        </div> 
      </form>
    </div>
  );
};

export default FormQuestions;

