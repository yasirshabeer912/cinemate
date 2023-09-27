import { useEffect, useState } from 'react'

const useFetch = (apiPath, queryTerm = "", page = 1) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}&page=${page}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      
    }
    fetchMovies();
  }, [url]);

  return { data };
}

export default useFetch;
