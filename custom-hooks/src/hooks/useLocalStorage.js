import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    return savedValue
      ? JSON.parse(savedValue)
      : initialValue;
  });

  const updateValue = (newValue) => {
    setValue((currentValue) => {
      const valueToStore =
        typeof newValue === "function"
          ? newValue(currentValue)
          : newValue;

      localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );

      return valueToStore;
    });
  };

  return [value, updateValue];
}

export default useLocalStorage;