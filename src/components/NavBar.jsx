import React from 'react';
import '../assets/css/navbar.css'

const NavBar = () => {

  return (
    <div className='contentNavBarBtns'>
      <button className='loginBtn' type='login' onClick="function()">Login</button>
      <button className='signInBtn' type='signIn' onClick="function()">Sign In</button>
    </div>
  );
};

export default NavBar;