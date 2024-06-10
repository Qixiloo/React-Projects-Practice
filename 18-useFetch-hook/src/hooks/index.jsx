import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  async function fetchData(url) {
    try {
      setPending(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setData(data);
      setError(null);
      setPending(false);
    } catch (e) {
      setPending(false);
      setError(`the error is ${e}`);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, error, pending];
}
