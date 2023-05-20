import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import '../styles/header.css';
import Buttons from './Btns';

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <Buttons />
    </div>
  );
}

export default Header;
