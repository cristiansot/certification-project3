import React from 'react';
import '../assets/css/navbar.css'

const NavBar = () => {

  return (
    <div className='contentNavBarBtns'>
      <button className='loginBtn' type='login' onclick="function()">Login</button>
      <button className='signInBtn' type='signIn' onclick="function()">Sign In</button>
    </div>
  );
};

export default NavBar;