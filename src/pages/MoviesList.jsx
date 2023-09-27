import { Pagination } from '@mui/material';
import Card from '../components/Card';
import useFetch from '../Hooks/useFetch';
import { useState } from 'react';


const MoviesList = ({ apiPath }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18;
  const { data: allMovies } = useFetch(apiPath, "", currentPage);

  // Select a random subset of movies
  const randomMovies = allMovies.sort(() => 0.5 - Math.random()).slice(0, pageSize);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main className=''>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {randomMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            count={10}
            color="secondary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </section>
    </main>
  )
}

export default MoviesList;
