import React from 'react';
import '../assets/css/navBar.css';

const NavBar = () => {

  const handleHomeClick = () => {
    window.location.href = "/home";
  };

  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  const handleSignInClick = () => {
    window.location.href = "/sign-in";
  };

  return (
    <div className='contentNavBarBtns'>
      <div className='contentHomeBtn'>
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
