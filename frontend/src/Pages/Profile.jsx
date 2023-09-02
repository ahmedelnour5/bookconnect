import React, { useContext } from 'react';
import '../Styles/Profile.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { UserContext } from '../Context/UserContext';
import Header from '../Components/Header/Header';
import UserLists from '../Components/UserLists';

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

  const buttonStyles = {
    fontFamily: 'inherit',
    bgcolor: '#5217fc',
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
          <Button variant="contained" endIcon={<AddIcon />} sx={buttonStyles}>
            Follow
          </Button>
        </div>
      </div>
      <UserInfo />
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Profile">
      <Header />
      <div className="profileContainer">
        <ProfileCard name={user.name} />
        <UserLists />
      </div>
    </div>
  );
};

export default Profile;
