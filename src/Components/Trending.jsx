import React, { useEffect, useState } from 'react';
import { api } from '../Services/GlobalAPI';
import TrendingMovies from './TrendingMovies';

const Trending = () => {
  useEffect(() => {
    async function trendingsMovies() {
      const data = await api.movieTrendings();
      setMovies(data.results);
    }
    trendingsMovies();
  }, []);

  const [movies, setMovies] = useState();
  

  return (
    <main className='relative'>
      <h1 className='pb-6 px-8 text-2xl font-semibold'>Trending Tops</h1>
      {movies && <TrendingMovies movies={movies} />}
    </main>
  );
};

export default Trending;
