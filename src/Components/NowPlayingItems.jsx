import React, { useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { api } from '../Services/GlobalAPI';

const NowPlayingItems = ({ movies }) => {
  const {imgUrl} = api

  return (
    <div
      ref={elementRef}
      className="flex overflow-x-auto h-auto scrollbar-hide px-8 p-4 gap-4  "
    >
      <FaArrowLeft onClick={handleLeft} className="seta-esquerda" />
      <FaArrowRight onClick={handleRight} className="seta-direita" />
      {movies.slice(0, 10).map((movie) => (
        <Link key={movie.id} to={`/filme/${movie.id}`}>
          <div className="rounded-lg min-w-[300px] hover:border-[3px] hover:border-white duration-100 ease-in-out shadow-lg shadow-black">
            <img
              className="w-full rounded-lg"
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

export default NowPlayingItems;
