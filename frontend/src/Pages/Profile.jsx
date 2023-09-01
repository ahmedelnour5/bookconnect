import React, { useContext } from 'react';
import '../Styles/Profile.css';
import { UserContext } from '../App';
import Header from '../Components/Header/Header';
import UserLists from '../Components/UserLists';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

const { user } = useContext(UserContext);
const name = user.name;

const UserInfo = () => {
  return (
    <div className="followInfo">
      <span className="following">Following:</span>
      <span className="followers">Followers:</span>
    </div>
  );
};

const ProfileCard = ({ name }) => {
  const avatarStyles = {
    height: 60,
    width: 60,
    marginBottom: 1,
  };

  return (
    <div className="profileCard">
      <div className="bio">
        <div className="Avatar">
          <Avatar sx={avatarStyles}>
            <PersonIcon />
          </Avatar>
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
