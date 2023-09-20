import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Styles/Profile.css';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { UserContext } from '../Context/UserContext';
import Header from '../Components/Header/Header';
import UserLists from '../Components/UserLists';
import UserReviews from '../Components/UserReviews';

const UserInfo = () => {
  return (
    <div className="followInfo">
      <span className="following">Following:</span>
      <span className="followers">Followers:</span>
    </div>
  );
};

const ProfileNav = () => {
  return (
    <div className="profileNav">
      <div className="profile-nav-container">
        <NavLink to="." activeClassName="profile-link-active">
          <h3 className="profile-link">Lists</h3>
        </NavLink>
      </div>
      <div className="profile-nav-container">
        <NavLink to="./reviews" activeClassName="profile-link-active">
          <h3 className="profile-link">Reviews</h3>
        </NavLink>
      </div>
    </div>
  );
};

const ProfileCard = ({ name, active }) => {
  const avatarStyles = {
    height: 60,
    width: 60,
    marginBottom: 3,
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
      <ProfileNav active={active} />
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const renderProfileFeed = () => {
      if (location.pathname === '/profile/reviews') {
        setFeed(<UserReviews />);
      } else {
        setFeed(<UserLists />);
      }
    };

    renderProfileFeed();
  }, [location]);

  return (
    <div className="Profile">
      <Header />
      <div className="profileContainer">
        <ProfileCard name={user.name} active={location} />
        {feed}
      </div>
    </div>
  );
};

export default Profile;
