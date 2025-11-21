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
  console.log(movies);

  return <main >{movies && <TrendingMovies movies={movies} />}</main>;
};

export default Trending;
