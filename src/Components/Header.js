import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import '../styles/header.css';
import Login from './Login';

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <Login />
    </div>
  );
}

export default Header;
