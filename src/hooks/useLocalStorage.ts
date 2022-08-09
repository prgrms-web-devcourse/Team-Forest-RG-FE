import { useCallback, useState } from "react";

export type ReturnTypes<T> = [T, (value: T) => void, () => void];

function useLocalStorage<T>(key: string, defaultValue: T): ReturnTypes<T> {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setItem = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  const removeItem = useCallback(() => {
    try {
      setValue(defaultValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  return [value, setItem, removeItem];
}

export default useLocalStorage;
