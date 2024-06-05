import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : { username: '', email: '' };
    });

  const handleAuthorization = (userData) => {
        setUser(userData);
        window.location.href = '/account/personal-data';
    }

    const handleRegistration = (userData) => {
        setUser(userData);
        window.location.href = '/account/personal-data';
    }

    const handleLogout = () => {
      setUser({ username: '', email: '' });
      window.location.href = '/home';
    }

    useEffect(() => {
      sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, handleRegistration, handleAuthorization, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};