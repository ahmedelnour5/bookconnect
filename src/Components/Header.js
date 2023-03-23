import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <Navbar />
      <Logo />
    </div>
  );
}

export default Header;
