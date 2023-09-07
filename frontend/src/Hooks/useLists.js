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
      await axios
        .get(API_URL, config)
        .then((res) => {
          if (res.data && res.data.message === 'No lists!') {
            setMessage('No Lists!');
          } else if (res.data && Array.isArray(res.data)) {
            setLists(res.data);
          }
        })
        .catch((error) => console.error(error));
    };
    getLists();
  }, []);

  return { lists, message };
};

export default useLists;
