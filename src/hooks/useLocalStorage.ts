import { useCallback, useState } from "react";

export type ReturnTypes<T> = [string, (value: T) => void, () => void];

function useLocalStorage<T>(key: string, defaultValue: string): ReturnTypes<T> {
  const [value, setValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? item : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setItem = useCallback(
    (newValue: T) => {
      try {
        setValue(
          typeof newValue === "string" ? newValue : JSON.stringify(newValue)
        );
        localStorage.setItem(
          key,
          typeof newValue === "string" ? newValue : JSON.stringify(newValue)
        );
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
