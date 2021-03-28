import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use Effect running");
    fetch(url)
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
        setIsLoading(false);
        console.log(e.message);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
