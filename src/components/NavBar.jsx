import React from 'react';

const NavBar = () => {

  return (
    <div className='contentNavBarBtns'>
      <button className='loginBtn' type='login' onclick="function()">Login</button>
      <button className='SignInBtn' type='signIn' onclick="function()">Sign In</button>
    </div>
  );
};

export default NavBar;