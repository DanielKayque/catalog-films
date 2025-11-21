import { useEffect, useState } from 'react';
import { api } from '../Services/GlobalAPI';
import PopularMovies from './PopularMovies';

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function popularMovies() {
      const data = await api.moviePopular();
      setMovies(data.results);
    }
    popularMovies();
  }, []);

  return (
    <main className=''>
      {movies && <PopularMovies movies={movies} />}
    </main>
  );
};

export default Popular;
