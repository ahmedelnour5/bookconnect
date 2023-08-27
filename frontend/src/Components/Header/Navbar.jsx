import React from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import AuthBtns from './AuthBtns';
import Auth from '../../features/Auth';


const Navbar = () => {
const user = Auth.getUser();

  return (
    <div className='navContainer'>
    <ul className="navList">
      <Link to="/books">Books</Link>
      <Link to="/people">People</Link>
      <Link to="/lists">Lists</Link>
    </ul>
    {user ? <ProfileMenu name={user.name}/> : <AuthBtns/>}
    </div>
  );
};

export default Navbar;
