import { useEffect, useState } from 'react';
import { api } from '../Services/GlobalAPI';
import PopularMovies from './PopularMovies';

const BannerPopular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function popularMovies() {
      const data = await api.moviePopular();
      console.debug('[BannerPopular] api.moviePopular response', data);
      setMovies(data.results);
    }
    popularMovies();
  }, []);

  return (
    <main className='relative'>
      {movies && <PopularMovies movies={movies} />}
    </main>
  );
};

export default BannerPopular;
