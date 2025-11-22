import React, { useRef } from 'react';
import { api } from '../Services/GlobalAPI';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import styles from './PopularMovies.module.css';

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
      className={`flex overflow-x-auto scrollbar-hide md:h-[610px] p-10 gap-4 w-svw shrink-0`}
    >
      <FaArrowLeft
        onClick={handleLeft}
        className="seta-esquerda"
      />
      <FaArrowRight
        onClick={handleRight}
        className="seta-direita"
      />
        {movies.slice(0, 6).map((movie) => (
          <img
            className="border-2 border-transparent hover:border-2 hover:border-gray-100 transition-all duration-200 rounded-xl shadow-xl shadow-black min-w-full object-cover lg:object-left-top"
            key={movie.id}
            src={`${imgPosterUrl}${movie.backdrop_path}`}
            alt={movie.title}
          />
        ))}
    </div>
  );
};

export default PopularMovies;
