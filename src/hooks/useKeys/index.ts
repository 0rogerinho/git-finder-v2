import React from 'react';
// Context
import { keysContext } from '../../context/key-context';

export const useKeys = () => {
  const context = React.useContext(keysContext);
  if (!context) {
    throw new Error('useKeys must be used within a KeysProvider');
  }
  return context;
};
