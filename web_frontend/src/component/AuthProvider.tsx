import React, { createContext, FC, useEffect, useState } from 'react';
import firebase, { auth } from '../firebase';

type UserProps = firebase.User | null | undefined;

type AuthContextProps = {
  currentUser: UserProps;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProps>();

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {currentUser === undefined ? <></> : children}
    </AuthContext.Provider>
  );
};
