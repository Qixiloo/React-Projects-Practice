import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let nowValue;

    try {
      nowValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      console.log("error", error);
      nowValue = defaultValue;
    }

    return nowValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
