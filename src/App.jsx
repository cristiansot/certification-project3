import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import QuizGame from './components/QuizGame';
import Login from './components/Login';
import SignIn from './components/SignIn';
import './assets/css/app.css';

let quizzes = [ //I changed for let for to make modifications
  {
    "id": 1,
    "name": "Asynchronous JavaScript & Async-await Syntax",
    "questions": [
      {
        "id": 2,
        "question": "What is Asynchronous JavaScript?",
        "options": [
          { "textAnswer": "Code that involves callbacks, promises, or async-await to handle operations ", "isCorrect": true },
          { "textAnswer": "Code that runs in parallel with other code ", "isCorrect": false },
          { "textAnswer": "Code that runs synchronously, one line after another", "isCorrect": false },
        ]
      },
      {
        "id": 3,
        "question": "In a real-world scenario, which of the following is a good example of the need for asynchronous programming?",
        "options": [
          { "textAnswer": "Fetching data from a database ", "isCorrect": true },
          { "textAnswer": "Checking if a variable is equal to a constant ", "isCorrect": false },
          { "textAnswer": "Calculating the sum of an array of numbers ", "isCorrect": false },
          { "textAnswer": "Performing a mathematical operation on two numbers ", "isCorrect": false }
        ]
      },
      {
        "id": 4,
        "question": "When might you use asynchronous JavaScript in a web application?",
        "options": [
          { "textAnswer": "To animate a button when it's clicked", "isCorrect": false },
          { "textAnswer": "To calculate the total price of items in a shopping cart", "isCorrect": false },
          { "textAnswer": "To fetch and display real-time stock market data on a webpage", "isCorrect": true },
        ]
      },
      {
        "id": 5,
        "question": "What is the purpose of the 'async' keyword when declaring a function?",
        "options": [
          { "textAnswer": "It defines an asynchronous error handler for the function", "isCorrect": false },
          { "textAnswer": "It marks the function as asynchronous, allowing the use of 'await' inside it", "isCorrect": true },
          { "textAnswer": "It converts the function into a generator", "isCorrect": false },
          { "textAnswer": "It makes the function run synchronously", "isCorrect": false }
        ]
      },
      {
        "id": 6,
        "question": "Which keyword is used to handle errors in asynchronous code within a 'try-catch' block?",
        "options": [
          { "textAnswer": "'finally'", "isCorrect": false },
          { "textAnswer": "'catch'", "isCorrect": true },
          { "textAnswer": "'throw'", "isCorrect": false },
          { "textAnswer": "'error'", "isCorrect": false }
        ]
      },
    ]
  },
  {
    "id": 7,
    "name": "REST APIs & Using Fetch",
    "questions": [
      {
        "id": 8,
        "question": "In a REST API, a 404 status code always indicates the server is down or unreachable",
        "options": [
          { "True": "Answer 1", "isCorrect": false },
          { "False": "Answer 2", "isCorrect": true },
        ]
      },
      {
        "id": 8,
        "question": "Which HTTP status code typically represents a successful response in a REST API when a resource is successfully created?",
        "options": [
          { "200 OK": "Answer 1", "isCorrect": false },
          { "201 Created": "Answer 2", "isCorrect": true },
          { "204 No Content": "Answer 3", "isCorrect": false },
          { "400 Bad Request": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 9,
        "question": "In a RESTful API design, a PUT request is typically used to create a new resource on the server",
        "options": [
          { "True": "Answer 1", "isCorrect": false },
          { "False": "Answer 2", "isCorrect": true },
        ]
      },
      {
        "id": 10,
        "question": "Which function is used to make HTTP requests and handle responses asynchronously?",
        "options": [
          { "True": "Answer 1", "isCorrect": false },
          { "False": "Answer 2", "isCorrect": true },
        ]
      },
      {
        "id": 11,
        "question": "Which function is used to make HTTP requests and handle responses asynchronously?",
        "options": [
          { "console.log": "Answer 1", "isCorrect": false },
          { "alert": "Answer 2", "isCorrect": false },
          { "setTimeout": "Answer 3", "isCorrect": false },
          { "fetch": "Answer 4", "isCorrect": true }
        ]
      },
      {
        "id": 12,
        "question": "Which HTTP method is typically used to retrieve data from a server?",
        "options": [
          { "PUT": "Answer 1", "isCorrect": false },
          { "POST": "Answer 2", "isCorrect": false },
          { "GET": "Answer 3", "isCorrect": true },
          { "DELETE": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 13,
        "question": "Which HTTP status code is commonly used to indicate that a client's request lacks proper authentication credentials?",
        "options": [
          { "401 Unauthorized": "Answer 1", "isCorrect": true },
          { "403 Forbidden ": "Answer 2", "isCorrect": false },
          { "404 Not Found": "Answer 3", "isCorrect": false },
          { "500 Internal Server Error": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 14,
        "question": "The Fetch API is available in both browsers and Node.js environments.",
        "options": [
          { "True": "Answer 1", "isCorrect": true },
          { "False": "Answer 2", "isCorrect": false },
        ]
      },
      {
        "id": 15,
        "question": "Which HTTP status code typically represents a successful response in a REST API when a resource is successfully created?",
        "options": [
          { "200 OK": "Answer 1", "isCorrect": false },
          { "201 Created": "Answer 2", "isCorrect": true },
          { "204 No Content": "Answer 3", "isCorrect": false },
          { "400 Bad Request": "Answer 4", "isCorrect": false }
        ]
      },
      {
        "id": 8,
        "question": "What is the primary purpose of Postman?",
        "options": [
          { "Writing server-side code": "Answer 1", "isCorrect": false },
          { "Building and testing APIs": "Answer 2", "isCorrect": true },
          { "Managing databases": "Answer 3", "isCorrect": false },
          { "Creating web design mockups": "Answer 4", "isCorrect": false }
        ]
      },  
    ]
  }
];

const App = () => {

  const [data, setData] = useState(quizzes);
  
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes quizzes={quizzes}/>} />
          <Route path="/quizGame/:id" element={<QuizGame quizzes={quizzes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
