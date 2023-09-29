import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import ProfileMenu from './ProfileMenu';

import AuthBtns from './AuthBtns';

const Navbar = () => {
  const { user } = useContext(UserContext) || {};

  return (
    <div className="navContainer">
      <ul className="navList">
        <Link to="/books">Books</Link>
        <Link to="/people">People</Link>
        <Link to="/lists">Lists</Link>
      </ul>
      {user && Object.keys(user).length > 0 ? (
        <ProfileMenu name={user.name} />
      ) : (
        <AuthBtns />
      )}
    </div>
  );
};

export default Navbar;
