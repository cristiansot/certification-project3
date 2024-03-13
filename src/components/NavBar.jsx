import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/css/navBar.css';

const NavBar = ({ sendLogin, sendSignIn, sendHome}) => {

  const handleHomeClick = () => {
   sendHome(window.location.href = "/home");
  };

  const handleLoginClick = () => {
    sendLogin(window.location.href = "/login");
  };

  const handleSignInClick = () => {
    sendSignIn(window.location.href = "/sign-in");
  };

  return (
    <div className='contentNavBarBtns'>
      <div>
        <button className='homeBtn' onClick={handleHomeClick}>
          Home
        </button>
      </div>
    

      <div className='loginNadSignInBtns'>
        <button className='loginBtn' onClick={handleLoginClick}>
          Login
        </button>
   
        <button className='signInBtn' onClick={handleSignInClick}>
         Sign in
        </button>       
      </div>
      
    </div>
  );
};

export default NavBar;
