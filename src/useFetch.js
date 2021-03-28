import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    console.log("use Effect running");
    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to connect");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          console.log(e.message);
        }
      });
    return abortCont.abort();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
