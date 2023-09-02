import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext({ user: {}, setUser: () => {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const storedUser = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
