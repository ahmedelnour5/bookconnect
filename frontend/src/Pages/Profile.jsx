import React, { useContext, useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import '../Styles/Profile.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Header from '../Components/Header/Header';
import UserLists from '../Components/UserLists';
import UserReviews from '../Components/UserReviews';
import { UserContext } from '../Context/UserContext';
import usePost from '../Hooks/usePost';
import useProfile from '../Hooks/useProfile';
import { CircularProgress } from '@mui/material';

const UserInfo = () => {
  return (
    <div className="followInfo">
      <span className="following">Following:</span>
      <span className="followers">Followers:</span>
    </div>
  );
};

const Bio = ({ name }) => {
  const [followed, setFollowed] = useState(false);

  const handleFollowClick = async () => {
    const { username } = useParams();
    const { data, error } = usePost(
      'http://localhost:8080/api/users/follow',
      username
    );
    if (data === `Succesfully followed ${username}`) {
      setFollowed(true);
    } else {
      console.log(error);
    }
  };
  const followedStyles = {
    fontFamily: 'inherit',
    bgcolor: '#21202d',
  };
  const buttonStyles = {
    fontFamily: 'inherit',
    bgcolor: '#5217fc',
  };
  return (
    <div className="bio">
      <div className="Avatar">
        <Avatar sx={{ height: 60, width: 60, marginBottom: 3 }}>
          <PersonIcon />
        </Avatar>
        <span className="profileName">{name}</span>
      </div>
      <div>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={followed === true ? followedStyles : buttonStyles}
          onClick={handleFollowClick}
        >
          Follow
        </Button>
      </div>
    </div>
  );
};

const ProfileNav = ({ activeTab, handleTabChange }) => {
  const buttonStyles = {
    fontFamily: 'inherit',
    color: 'inherit',
    textTransform: 'none',
    fontSize: 'inherit',
  };
  return (
    <div>
      <div className="profileNav">
        <Button
          className={activeTab === 'lists' ? 'profile-active' : ''}
          onClick={() => handleTabChange('lists')}
          sx={buttonStyles}
        >
          Lists
        </Button>
        <Button
          className={activeTab === 'reviews' ? 'profile-active' : ''}
          onClick={() => handleTabChange('reviews')}
          sx={buttonStyles}
        >
          Reviews
        </Button>
      </div>
    </div>
  );
};

const ProfileCard = ({ name, activeTab, handleTabChange }) => {
  return (
    <div className="profileCard">
      <Bio name={name} />
      <UserInfo />
      <ProfileNav activeTab={activeTab} handleTabChange={handleTabChange} />
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('lists'); // Default to 'lists'

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const { profileData, pending } = useProfile();

  console.log('Pending in Profile component:', pending);
  console.log('Profiledata in Profile component:', profileData);
  return (
    <div className="Profile">
      <Header />
      <div className="profileContainer">
        <ProfileCard
          name={user.name}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />

        {pending ? (
          <CircularProgress />
        ) : activeTab === 'lists' ? (
          <UserLists lists={profileData.lists} />
        ) : (
          <UserReviews reviews={profileData.ratings} />
        )}
      </div>
    </div>
  );
};

export default Profile;
