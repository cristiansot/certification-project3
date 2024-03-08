import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import '../assets/css/navBar.css';

const NavBar = () => {

  const handleHomeClick = () => {
    window.location.href = "/home";
  };

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleSignInClick = () => {
    window.location.href = "/signin";
  };

  return (
    <Router>
      <div className='contentNavBarBtns'>
        <button className='homeBtn' onClick={handleHomeClick}>
          Home
        </button>

        <button className='loginBtn' onClick={handleLoginClick}>
          <Link to="/login">Login</Link>
        </button>

        <button className='signInBtn' onClick={handleSignInClick}>
          <Link to="/signIn">Sign in</Link>
        </button>
      </div>
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
