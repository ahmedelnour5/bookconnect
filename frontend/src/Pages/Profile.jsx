import React from 'react';
import '../Styles/Profile.css';
import Header from '../Components/Header/Header';
import UserLists from '../Components/UserLists';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';

const user = JSON.parse(localStorage.getItem('user'));
const name = user.name;
const avatarName = user.name.substring(0, 1);

const UserInfo = () => {
  return (
    <div className="followInfo">
      <span className="following">Following:</span>
      <span className="followers">Followers:</span>
    </div>
  );
};

const ProfileCard = ({ avatarName, name }) => {
  const avatarStyles = {
    height: 60,
    width: 60,
    bgcolor: deepOrange[500],
    marginBottom: 1,
  };

  return (
    <div className="profileCard">
      <div className="bio">
        <div className="Avatar">
          <Avatar sx={avatarStyles}>{avatarName}</Avatar>
          <span className="profileName">{name}</span>
        </div>
        <div>
          <Button variant="contained">Follow</Button>
        </div>
      </div>
      <UserInfo />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="Profile">
      <Header />
      <div className="profileContainer">
        <ProfileCard avatarName={avatarName} name={name} />
        <UserLists />
      </div>
    </div>
  );
};

export default Profile;
