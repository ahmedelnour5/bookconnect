import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Logo = ({ to }) => {
  return (
    <Link to={to}>
      <h1 className="Logo">bookconnect</h1>
    </Link>
  );
};

export default Logo;
