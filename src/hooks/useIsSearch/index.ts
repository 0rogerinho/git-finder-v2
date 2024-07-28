import React from 'react';
// Context
import { isSearchContext } from '../../context/is-search';

export const useIsSearch = () => {
  const context = React.useContext(isSearchContext);
  if (!context) {
    throw new Error('useIsSearch must be used within a IsSearchProvider');
  }
  return context;
};
