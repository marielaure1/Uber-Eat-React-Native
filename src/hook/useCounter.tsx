import React, { useState, useCallback, useEffect, createContext } from 'react';

export const StoreContextCart = createContext(null)

export default ({children}) => {

  // const [count, setCount] = useState(initCount);
  const [count, setCount] = useState(0); // MAJ UseContext

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return <StoreContextCart.Provider value={{ count, increment, decrement }}>{children}</StoreContextCart.Provider>;
}