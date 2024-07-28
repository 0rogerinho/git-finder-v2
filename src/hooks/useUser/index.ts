import React from 'react';
// Context
import { userContext } from '../../context/user-context';

export const useUser = () => {
  const context = React.useContext(userContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
