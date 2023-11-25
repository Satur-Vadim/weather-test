import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (error) {
      setState(state);
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;
