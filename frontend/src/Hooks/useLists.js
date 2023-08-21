import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../features/Auth';

const useLists = () => {
  const API_URL = 'http://localhost:8080/api/userLists/getLists';
  const user = Auth.getUser();
  const config = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };
  const [lists, setLists] = useState();

  useEffect(() => {
    const getLists = async () => {
      try {
        const { data } = await axios.get(API_URL, config);
        if (data) {
          console.log(data);
          setLists(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, []);

  return { lists };
};

export default useLists;
