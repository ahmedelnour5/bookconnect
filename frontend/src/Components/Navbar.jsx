import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navList">
      <Link to="/books">Books</Link>
      <Link to="/people">People</Link>
      <Link to="/lists">Lists</Link>
    </ul>
  );
};

export default Navbar;
