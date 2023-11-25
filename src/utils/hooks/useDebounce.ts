import { useState, useEffect } from 'react';

const useDebounce = <T>(value: T, delay: number, callback?: (value: T) => void) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      if (callback) callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);

  return debouncedValue;
};

export default useDebounce;
