import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';

const usePost = (userData, API_URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const user = useContext(UserContext);

  const config = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(API_URL, userData, config);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    // Call the post function when userData or API_URL changes
    post();
  }, [userData, API_URL, config]); // Include dependencies in the array

  return { data, error }; // Return the data and error states
};

export default usePost;
