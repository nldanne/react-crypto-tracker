import React, { createContext, useContext, useState, useEffect } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('EUR');
  const [symbol, setSymbol] = useState('€');

  useEffect(() => {
    switch(currency) {
      case 'HUF':
        setSymbol('Ft');
        break;
      case 'USD': 
        setSymbol('$');
        break;
      default:
        setSymbol('€');
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }} >
      {children}
    </Crypto.Provider>
  )

};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};