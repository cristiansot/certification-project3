import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/form.css';


const schema = Yup.object({
  question: Yup.string().required('Required'),
  options: Yup.array().of(
    Yup.object().shape({
      textAnswer: Yup.string().required('Required'),
      isCorrect: Yup.boolean().required('Required'),
    })
  ).required('Required'),
});

const FormQuestions = ({ getData }) => {

  const send = (values, { resetForm }) => {
    console.log(values);
    getData(values);
    resetForm();
  };

  const { handleSubmit, handleChange, errors, values, setFieldValue } = useFormik({
    initialValues: {
      question: '',
      options: [
        { textAnswer: '', isCorrect: false },
        { textAnswer: '', isCorrect: false },
        { textAnswer: '', isCorrect: false },
        { textAnswer: '', isCorrect: false },
      ],
    },
    validationSchema: schema,
    onSubmit: send,
  });

  const handleChangeCheckBox = (index) => {
    const updateValues = [...values.options];
    updateValues[index].isCorrect = !updateValues[index].isCorrect;
    setFieldValue('options', updateValues);
  }

  return (
    <div className='wrapperForm'>
      <form onSubmit={handleSubmit}>
        <div className='contentInputsForm'>
          <h1>Create Questions</h1>
          <h2>Mark the correct alternative with a checkbox</h2>
            
          <div className='inputForm'>
            <input 
              className='inputWriteQuestion'
              type="text"
              placeholder='Write the Question' 
              name='question' 
              value={values.question} 
              onChange={handleChange} />
          </div>

          {errors.question && <span>{errors.question}</span>}

          {values.options.map((option, index) => (
            <div className='inputForm' key={index}>
              <input
                name={`options[${index}].textAnswer`}
                className='inputTextAnswer'
                type='text'
                placeholder='Write an Answer'
                value={option.textAnswer}
                onChange={handleChange}
              />
           
              <input 
                type='checkbox' 
                value={option.isCorrect} 
                name={`options[${index}].isCorrect`} 
                onChange={() => handleChangeCheckBox(index)}
              />
            </div>
          ))}
          
          <button className='formBtn' type='submit'>Add Another Question</button>
        </div> 
      </form>
    </div>
  );
};

export default FormQuestions;



/** I saw this documentation, videos and questions to chatGPT for to understand how to develop the form
 * https://formik.org/docs/guides/arrays
 * www.youtube.com/watch?v=Or0rljWUyEM&ab_channel=EWebik
 * https://www.youtube.com/watch?v=7Ophfq0lEAY&ab_channel=NikitaDev
 * https://www.youtube.com/watch?v=zw98_hVFpzE&ab_channel=RoyDigitalTech
 * https://chat.openai.com/share/d2f4cef2-c2b9-4fe8-8911-27d8fbd916c3
 * https://chat.openai.com/share/0b116bc2-d580-4895-9b30-2c45c9fe861f
 * https://chat.openai.com/share/d87f0043-78a6-459f-ba99-ab2d77c8e1a9
**/
