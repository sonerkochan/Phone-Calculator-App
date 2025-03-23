import React, { createContext, useContext, useState } from 'react';

const NumContext = createContext<any>(null);

export const NumProvider: React.FC = ({ children }) => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);

  return (
    <NumContext.Provider value={{ num1, setNum1, num2, setNum2 }}>
      {children}
    </NumContext.Provider>
  );
};

export const useNum = () => useContext(NumContext);
