import React from 'react';
import Trending from './Trending';
import BannerPopular from './BannerPopular';
import Animations from './Animations';
import NowPlaying from './NowPlaying';

const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden box-border">
      <BannerPopular />
      <Animations />
      <Trending />
      <NowPlaying />
    </div>
  );
};

export default Home;
