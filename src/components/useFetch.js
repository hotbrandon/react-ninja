import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching posts!");
    const abrtCtrl = new AbortController();
    fetch(url, { signal: abrtCtrl.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("failed to fetch posts!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "abortError") {
          console.log("abort");
        } else {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => abrtCtrl.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
