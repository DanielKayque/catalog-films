import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../Services/GlobalAPI';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const { imgUrl } = api;

const TrendingMovies = ({ movies }) => {
  const elementRef = useRef(null);
  const width = window.innerWidth;
  console.log(width);

  const handleRight = () => {
    elementRef.current.scrollBy({
      left: 316,
      behavior: 'smooth',
    });
  };

  const handleLeft = () => {
    elementRef.current.scrollBy({
      left: -316,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={elementRef} className="flex overflow-x-auto h-auto w-svw scrollbar-hide px-8 mb-20 gap-4 ">
      <FaArrowLeft onClick={handleLeft} className="absolute hidden md:block text-4xl left-0 top-[50%] cursor-pointer bg-[#2a2a2a] p-2 ml-8 rounded-[50%]" />
      <FaArrowRight onClick={handleRight} className="absolute hidden md:block text-4xl right-0 top-[50%] cursor-pointer bg-[#2a2a2a] p-2 mr-8 rounded-[50%]" />
      {movies.slice(0, 10).map((movie) => (
        <Link key={movie.id} to={`/filme/${movie.id}`}>
          <img
            className="rounded-md min-w-[300px] hover:border-[3px] hover:border-white border-[3px] border-transparent border-white transition-all duration-200 ease-in-out"
            key={movie.id}
            src={`${imgUrl}${movie.poster_path}`}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

export default TrendingMovies;
