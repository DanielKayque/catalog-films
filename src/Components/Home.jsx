import React from 'react';
import Popular from './Popular';
import Trending from './Trending';

const Home = () => {
  return (
    <div className="h-auto w-full overflow-hidden box-border">
      <Popular />
      <Trending />
    </div>
  );
};

export default Home;
