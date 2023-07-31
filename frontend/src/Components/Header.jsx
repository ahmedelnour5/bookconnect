import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import AuthBtns from './AuthBtns';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navbar />
        <AuthBtns />
      </div>
    </header>
  );
};

export default Header;
