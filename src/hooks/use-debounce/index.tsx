import { useEffect, useState } from 'react';

export function useDebounce(value: any, delay: number = 300) {
  const [debounceValue, setDebounceValue] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}
