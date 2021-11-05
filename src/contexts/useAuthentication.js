import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const getToken = () => localStorage.getItem('tokenCompassoUol');

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('tokenCompassoUol')) {
      setUserToken(localStorage.getItem('tokenCompassoUol'));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
