import { useEffect, useState } from 'react';

const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
