import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../Styles/Dashboard.css';

const ProfileCtrls = ({ name }) => {
  return (
    <div className="profile-ctrls">
      <AccountBoxIcon />
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
