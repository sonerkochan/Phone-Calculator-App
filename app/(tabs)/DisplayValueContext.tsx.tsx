import React, { createContext, useContext, useState } from 'react';

const DisplayValueContext = createContext<any>(null);

export const DisplayValueProvider: React.FC = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  return (
    <DisplayValueContext.Provider value={{ displayValue, setDisplayValue }}>
      {children}
    </DisplayValueContext.Provider>
  );
};

export const useDisplayValue = () => useContext(DisplayValueContext);
