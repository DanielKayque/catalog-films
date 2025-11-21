import React from 'react';
import Trending from './Trending';
import BannerPopular from './BannerPopular';

const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden box-border">
      <BannerPopular />
      <Trending />
    </div>
  );
};

export default Home;
