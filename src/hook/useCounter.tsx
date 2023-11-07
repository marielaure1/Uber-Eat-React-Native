import React, { useState, useCallback, useEffect } from 'react';

export default function useCounter(initCount = 0) {
  const [count, setCount] = useState(initCount);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return { count, increment, decrement };
}