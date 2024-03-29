import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navBar.css';

const NavBar = ({ dataLocalStorage }) => {

  return (
    <div className='contentNavBarBtns'>
      <div className='contentHomeBtn'>
        <Link to={"/home"}>
          <button className='homeBtn'>Home</button>
        </Link>
      </div>

      <div>
        <h2 className='totalScore'>Total Score: {dataLocalStorage}</h2>
      </div>
    
      <div className='loginNadSignInBtns'>
        <Link to={"/login"}>
          <button className='loginBtn'>Login</button>
        </Link>

        <Link to={"/sign-in"}>
          <button className='signInBtn'>Sign in</button>
        </Link>    
      </div>
      
    </div>
  );
};

export default NavBar;
