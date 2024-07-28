import React from 'react';
// Types
import { IUser } from '../../@types';

interface IUserContext {
  user: IUser | null;
  setUser: (props: IUser | null) => void;
}

export const userContext = React.createContext<IUserContext | undefined>(
  undefined,
);

interface IUserProvider {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
