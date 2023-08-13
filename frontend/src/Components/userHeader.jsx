import React from 'react';
import People from '@mui/icons-material/People';
import Logo from './Logo';
import Navbar from './Navbar';
import '../Styles/dashboard.css';

const ProfileCtrls = ({ name }) => {
  return (
    <div className="profile-ctrls">
      <People />
      <span className="username">{name}</span>
    </div>
  );
};
const UserHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user.name;

  return (
    <header className="header">
      <div className="header-container">
        <Logo to={'/dashboard'} />
        <Navbar />
        <ProfileCtrls name={name} />
      </div>
    </header>
  );
};

export default UserHeader;
