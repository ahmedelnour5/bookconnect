import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useProfile = () => {
  const API_URL = 'http://localhost:8080/api/profile';

  const [profileData, setProfileData] = useState();
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(true);
  const { username } = useParams();
  useEffect(() => {
    const getProfileData = async () => {
      await axios
        .get(`${API_URL}/${username}`)
        .then((res) => {
          console.log(res);
          setProfileData(res.data);
          setPending(false);
        })
        .catch((error) => {
          console.error(error);
          setPending(false);
        });
    };
    getProfileData();
  }, [username]);

  return { profileData, message, pending };
};

export default useProfile;
