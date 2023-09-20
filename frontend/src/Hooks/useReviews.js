import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useReviews = () => {
  const API_URL = 'http://localhost:8080/api/profile';

  const [profileData, setProfileData] = useState();
  const [message, setMessage] = useState('');
  const { username } = useParams();
  useEffect(() => {
    const getProfileData = async () => {
      await axios
        .get(`${API_URL}/${username}`)
        .then((res) => {
          if (res.data && res.data.message === 'User not found') {
            setMessage('User not found');
          } else if (res.data && Array.isArray(res.data)) {
            console.log(res.data);
            setProfileData(res.data);
          }
        })
        .catch((error) => console.error(error));
    };
    getProfileData();
  }, [username]);

  return { profileData, message };
};

export default useProfile;
