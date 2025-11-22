import React from 'react';
import disney from '../images/disney.png';
import marvel from '../images/marvel.png';
import nationalG from '../images/nationalG.png';
import pixar from '../images/pixar.png';
import starwar from '../images/starwar.png';
import disneyVideo from '../images/disney.mp4';
import marvelVideo from '../images/marvel.mp4';
import nationalGVideo from '../images/national-geographic.mp4';
import pixarVideo from '../images/pixar.mp4';
import starwarVideo from '../images/star-wars.mp4';

const Animations = () => {
  const menu = [
    {
      logo: disney,
      video: disneyVideo,
    },
    {
      logo: pixar,
      video: pixarVideo,
    },
    {
      logo: marvel,
      video: marvelVideo,
    },
    {
      logo: starwar,
      video: starwarVideo,
    },
    {
      logo: nationalG,
      video: nationalGVideo,
    },
  ];

  return (
    <div className="flex w-svw mb-12 items-center px-8 justify-center gap-6">
      {menu.map((item) => (
        <div className='relative  border-2 rounded-lg hover:scale-105 transition-all duration-200 shadow-xl shadow-black' key={item.logo}>
          <img
            src={item.logo}
            className="w-full z-[1]"
            alt="logo"
          />
          <video src={item.video} type="video/mp4" className='absolute top-0 left-0 opacity-0 hover:opacity-80 z-0 rounded-lg' autoPlay loop muted/>
        </div>
      ))}
    </div>
  );
};

export default Animations;
