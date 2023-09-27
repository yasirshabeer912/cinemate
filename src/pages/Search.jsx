import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import useFetch from '../Hooks/useFetch'

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  
 

  return (
    <main>
      <section>
      <p className="text-3xl text-gray-700 dark:text-white  py-3">
            {movies.length === 0 ? (
              <>
                No Result Found For {queryTerm && (
                  <span className="text-red-400">{queryTerm} :-</span>
                )}
              </>
            ) : (
              <>
                Result for {queryTerm && (
                  <span className="text-red-400 text-4xl">{queryTerm}</span>
                )}
              </>
            )}
          </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">  
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}     
        </div>
      </section>
    </main>
  );
}

export default Search;
