import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';

const useLists = () => {
  const API_URL = 'http://localhost:8080/api/userLists/getLists';
  const { user } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };
  const [lists, setLists] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getLists = async () => {
      try {
        const { data } = await axios.get(API_URL, config);
        if (data && data.message === 'No lists!') {
          setMessage('No Lists!');
        } else if (data && Array.isArray(data)) {
          setLists(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  return { lists, message };
};

export default useLists;
