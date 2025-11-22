import React from 'react';
import Trending from './Trending';
import BannerPopular from './BannerPopular';
import Animations from './Animations';

const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden box-border">
      <BannerPopular />
      <Animations />
      <Trending />
    </div>
  );
};

export default Home;
