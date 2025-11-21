import React, { useRef } from 'react';
import { api } from '../Services/GlobalAPI';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import style from './PopularMovies.module.css'
const { imgPosterUrl } = api;

const PopularMovies = ({ movies }) => {
  const elementRef = useRef(null);
  const width = window.innerWidth;
  console.log(width);

  const handleRight = () => {
    elementRef.current.scrollBy({
      left: width,
      behavior: 'smooth',
    });
  };

  const handleLeft = () => {
    elementRef.current.scrollBy({
      left: -width,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={elementRef}
      className={`${style.noscroll} flex overflow-x-auto no-scrollbar h-[610px] w-svw shrink-0`}
    >
      <FaArrowLeft
        onClick={handleLeft}
        className="absolute hidden md:block text-4xl left-0 top-[305px] cursor-pointer bg-[#2a2a2a] p-2 ml-4 rounded-[50%]"
      />
      <FaArrowRight
        onClick={handleRight}
        className="absolute hidden md:block text-4xl right-0 top-[305px] cursor-pointer bg-[#2a2a2a] p-2 mr-4 rounded-[50%]"
      />
      {movies.slice(0, 6).map((movie) => (
        <img
          className=" rounded-2xl min-w-full object-cover object-left-top"
          key={movie.id}
          src={`${imgPosterUrl}${movie.backdrop_path}`}
          alt={movie.title}
        ></img>
      ))}
    </div>
  );
};

export default PopularMovies;
