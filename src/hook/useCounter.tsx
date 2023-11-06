import React, { useState, useCallback } from 'react';

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }, []);

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;
