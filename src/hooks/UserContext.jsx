import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const addUserStorage = async (userData) => {
    setUser(userData);
    await localStorage.setItem('bakeryUser', JSON.stringify(userData));
  };

  useEffect(() => {
    const getUserStorage = async () => {
      const userStorage = await localStorage.getItem('bakeryUser');
      userStorage && setUser(JSON.parse(userStorage));
    };
    getUserStorage();
  }, []);

  return (
    <UserContext.Provider value={{ user, addUserStorage, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with Usercontext');
  }
  return context;
};
