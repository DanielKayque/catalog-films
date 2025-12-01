import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../Services/GlobalAPI';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const { imgUrl } = api;

const TrendingMovies = ({ movies }) => {
  const elementRef = useRef(null);
  const width = window.innerWidth;

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
    <div
      ref={elementRef}
      className="flex overflow-x-auto h-auto scrollbar-hide px-8 p-4 gap-4  "
    >
      <FaArrowLeft onClick={handleLeft} className="seta-esquerda" />
      <FaArrowRight onClick={handleRight} className="seta-direita" />
      {movies.slice(0, 10).map((movie) => (
        <Link key={movie.id} to={`/filme/${movie.id}`}>
          <div className="rounded-lg w-[150px] md:w-[300px] h-auto hover:border-[3px] hover:border-white duration-100 ease-in-out shadow-lg shadow-black">
            <img
              className="w-full h-full rounded-lg object-cover object-left-top"
              key={movie.id}
              src={`${imgUrl}${movie.poster_path}`}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingMovies;
