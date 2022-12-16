import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching posts!");
    fetch(url)
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
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
