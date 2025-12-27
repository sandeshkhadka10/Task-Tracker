import { useState, useEffect } from 'react';

// here we are defining custom hook for debounce and it takes two parameter
// value -> the value you want to search
// delay -> how long to wait
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // before the effect runs again these will run first
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// jaba samma user leh input value change gardaina taba samma search nagarne, ani stop garepachi chai update garne