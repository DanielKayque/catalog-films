import React, { useContext, useEffect, useState } from 'react';
import { api } from '../Services/GlobalAPI';
import NowPlayingItems from './NowPlayingItems';

const NowPlaying = () => {
  const [movies, setMovies] = useState();
  console.log(movies);
  

  useEffect(() => {
    async function trendingsMovies() {
      const data = await api.nowPlaying();
      setMovies(data.results);
    }
    trendingsMovies();
  }, []);

  return (
    <main className="relative pb-6">
      <h1 className="pb-6 px-8 text-2xl font-semibold">Now Playing</h1>
      {movies && <NowPlayingItems movies={movies} />}
    </main>
  );
};

export default NowPlaying;
