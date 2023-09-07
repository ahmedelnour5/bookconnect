import React, { useContext } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../Styles/Header.css';
import { UserContext } from '../../Context/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <div className="header-container">
        {user && user !== 'null' ? (
          <Logo to={'/dashboard'} />
        ) : (
          <Logo to={'/landing'} />
        )}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
