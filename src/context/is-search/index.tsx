import React from 'react';

interface IIsSearchContext {
  isSearch: boolean;
  setIsSearch: (boolean: boolean) => void;
}

export const isSearchContext = React.createContext<
  IIsSearchContext | undefined
>(undefined);

interface IIsSearchProvider {
  children: React.ReactNode;
}

export const IsSearchProvider = ({ children }: IIsSearchProvider) => {
  const [isSearch, setIsSearch] = React.useState<boolean>(false);

  return (
    <isSearchContext.Provider value={{ isSearch, setIsSearch }}>
      {children}
    </isSearchContext.Provider>
  );
};
