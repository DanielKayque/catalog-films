import React, { useContext, useEffect } from 'react';
import { api } from '../Services/GlobalAPI';
import NowPlayingItems from './NowPlayingItems';
import UserContext from '../UserContext';

const NowPlaying = () => {
  const {moviesNowPlaying} = useContext(UserContext)

  return (
    <main className="relative pb-6">
      <h1 className="pb-6 px-8 text-2xl font-semibold">Now Playing</h1>
      {moviesNowPlaying && <NowPlayingItems movies={moviesNowPlaying} />}
    </main>
  );
};

export default NowPlaying;
