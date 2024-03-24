import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import QuizGame from './components/QuizGame';
import QuizGameLS from './components/QuizGameLS';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Create from './components/Create'
import './assets/css/app.css';

const quizzes = [
  {
    "id": 1,
    "title": "Asynchronous JavaScript & Async-await Syntax",
    "questions": [
      {
   
        "question": "What is Asynchronous JavaScript?",
        "options": [
          { "textAnswer": "Code that involves callbacks, promises, or async-await to handle operations", "isCorrect": true },
          { "textAnswer": "Code that runs in parallel with other code", "isCorrect": false },
          { "textAnswer": "Code that runs synchronously, one line after another", "isCorrect": false }
        ]
      },
      {
      
        "question": "In a real-world scenario, which of the following is a good example of the need for asynchronous programming?",
        "options": [
          { "textAnswer": "Fetching data from a database", "isCorrect": true },
          { "textAnswer": "Checking if a variable is equal to a constant", "isCorrect": false },
          { "textAnswer": "Calculating the sum of an array of numbers", "isCorrect": false },
          { "textAnswer": "Performing a mathematical operation on two numbers", "isCorrect": false }
        ]
      },
      {
        
        "question": "When might you use asynchronous JavaScript in a web application?",
        "options": [
          { "textAnswer": "To animate a button when it's clicked", "isCorrect": false },
          { "textAnswer": "To calculate the total price of items in a shopping cart", "isCorrect": false },
          { "textAnswer": "To fetch and display real-time stock market data on a webpage", "isCorrect": true }
        ]
      },
      {
      
        "question": "What is the purpose of the 'async' keyword when declaring a function?",
        "options": [
          { "textAnswer": "It defines an asynchronous error handler for the function", "isCorrect": false },
          { "textAnswer": "It marks the function as asynchronous, allowing the use of 'await' inside it", "isCorrect": true },
          { "textAnswer": "It converts the function into a generator", "isCorrect": false },
          { "textAnswer": "It makes the function run synchronously", "isCorrect": false }
        ]
      },
      {
      
        "question": "Which keyword is used to handle errors in asynchronous code within a 'try-catch' block?",
        "options": [
          { "textAnswer": "'finally'", "isCorrect": false },
          { "textAnswer": "'catch'", "isCorrect": true },
          { "textAnswer": "'throw'", "isCorrect": false },
          { "textAnswer": "'error'", "isCorrect": false }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "REST APIs & Using Fetch",
    "questions": [
      {
   
        "question": "In a REST API, a 404 status code always indicates the server is down or unreachable",
        "options": [
          { "textAnswer": "True", "isCorrect": false },
          { "textAnswer": "False", "isCorrect": true }
        ]
      },
      {
        
        "question": "Which HTTP status code typically represents a successful response in a REST API when a resource is successfully created?",
        "options": [
          { "textAnswer": "200 OK", "isCorrect": false },
          { "textAnswer": "201 Created", "isCorrect": true },
          { "textAnswer": "204 No Content", "isCorrect": false },
          { "textAnswer": "400 Bad Request", "isCorrect": false }
        ]
      },
      {
   
        "question": "In a RESTful API design, a PUT request is typically used to create a new resource on the server",
        "options": [
          { "textAnswer": "True", "isCorrect": false },
          { "textAnswer": "False", "isCorrect": true }
        ]
      },
      {
        
        "question": "Which function is used to make HTTP requests and handle responses asynchronously?",
        "options": [
          { "textAnswer": "True", "isCorrect": false },
          { "textAnswer": "False", "isCorrect": true }
        ]
      },
      {

        "question": "Which function is used to make HTTP requests and handle responses asynchronously?",
        "options": [
          { "textAnswer": "console.log", "isCorrect": false },
          { "textAnswer": "alert", "isCorrect": false },
          { "textAnswer": "setTimeout", "isCorrect": false },
          { "textAnswer": "fetch", "isCorrect": true }
        ]
      },
      {
       
        "question": "Which HTTP method is typically used to retrieve data from a server?",
        "options": [
          { "textAnswer": "PUT", "isCorrect": false },
          { "textAnswer": "POST", "isCorrect": false },
          { "textAnswer": "GET", "isCorrect": true },
          { "textAnswer": "DELETE", "isCorrect": false }
        ]
      },
      {
      
        "question": "Which HTTP status code is commonly used to indicate that a client's request lacks proper authentication credentials?",
        "options": [
          { "textAnswer": "401 Unauthorized", "isCorrect": true },
          { "textAnswer": "403 Forbidden", "isCorrect": false },
          { "textAnswer": "404 Not Found", "isCorrect": false },
          { "textAnswer": "500 Internal Server Error", "isCorrect": false }
        ]
      },
      {
       
        "question": "The Fetch API is available in both browsers and Node.js environments.",
        "options": [
          { "textAnswer": "True", "isCorrect": true },
          { "textAnswer": "False", "isCorrect": false }
        ]
      },
      {
       
        "question": "Which HTTP status code typically represents a successful response in a REST API when a resource is successfully created?",
        "options": [
          { "textAnswer": "200 OK", "isCorrect": false },
          { "textAnswer": "201 Created", "isCorrect": true },
          { "textAnswer": "204 No Content", "isCorrect": false },
          { "textAnswer": "400 Bad Request", "isCorrect": false }
        ]
      },
      {
       
        "question": "What is the primary purpose of Postman?",
        "options": [
          { "textAnswer": "Writing server-side code", "isCorrect": false },
          { "textAnswer": "Building and testing APIs", "isCorrect": true },
          { "textAnswer": "Managing databases", "isCorrect": false },
          { "textAnswer": "Creating web design mockups", "isCorrect": false }
        ]
      }
    ]
  }
];
// console.log(quizzes)

const App = () => {

  const [quiz, setQuiz] = useState([]);// This is the data from the create quiz, it must be sent to local storage
  const [totalScore, setTotalScore] = useState([0]);// Total Score, should to send to localSotage
  const [dataGame, setDataGame] = useState();// Game data
  const [dataLocalStorage, setDataLocalStorage] = useState()// Local storage data

  const dataScore = (data) => {
    const updatedScore = [...totalScore, data];
    setTotalScore(updatedScore);
  };

  const getScore = () => {
    const localStorageScore = [JSON.parse(localStorage.getItem('score'))];
    setTotalScore(localStorageScore)
    console.log(localStorageScore)
  }

  useEffect(() => {
    getScore();
  }, []);
  
  const getQuiz = () => {
    const localStorageData = [JSON.parse(localStorage.getItem('quiz'))];
    setQuiz(localStorageData)
  }
  // console.log(quiz)

  useEffect(() => {
    getQuiz();
  }, []);
  
  return (
    <Router>
      <div>
        <NavBar totalScore={totalScore} />
        {/* <div><pre>{JSON.stringify(quiz, null, 2)}</pre></div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes quizzes={quizzes} quiz={quiz} />} />
          <Route path="/quizGame/:id" element={<QuizGame quizzes={quizzes} dataScore={dataScore} totalScore={totalScore} />} />
          <Route path="/quizGameLS/:id" element={<QuizGameLS quiz={quiz} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

//Transfor object to aaray
//https://platzi.com/tutoriales/3271-javascript-practico/24316-como-transformar-un-objeto-a-un-array/

//UseState
//www.youtube.com/watch?v=hYYKRR-PSJU&ab_channel=TEV.Studio
