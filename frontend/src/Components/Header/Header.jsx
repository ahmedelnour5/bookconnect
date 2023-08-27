import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo to={'/landing'} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
