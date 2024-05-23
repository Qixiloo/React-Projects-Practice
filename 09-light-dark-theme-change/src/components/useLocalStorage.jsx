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


useEffect(()=>{
console.log('key is', key)
console.log('before change', localStorage.getItem(key))
localStorage.setItem(key, JSON.stringify(value))
console.log('after change', localStorage.getItem(key))


},[value])

return [value,setValue]
}
