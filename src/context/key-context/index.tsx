import React from 'react';

interface IKeysContext {
  keys: string[];
  setKeys: (string: string[]) => void;
}

export const keysContext = React.createContext<IKeysContext | undefined>(
  undefined,
);

interface IKeysProvider {
  children: React.ReactNode;
}

export const KeysProvider = ({ children }: IKeysProvider) => {
  const [keys, setKeys] = React.useState<string[]>([]);

  return (
    <keysContext.Provider value={{ keys, setKeys }}>
      {children}
    </keysContext.Provider>
  );
};
