import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const getToken = () => localStorage.getItem('tokenCompassoUol');

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('tokenCompassoUol')) {
      setUserToken(localStorage.getItem('tokenCompassoUol'));
    }

    if (localStorage.getItem('currentUser')) {
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
