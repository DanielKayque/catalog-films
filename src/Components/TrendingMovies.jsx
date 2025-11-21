import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../Services/GlobalAPI';

const { imgUrl } = api;

const TrendingMovies = ({ movies }) => {
  console.log(movies);
  return (
    <div className='flex overflow-x-auto scrollbar-hide gap-4'>
      {movies.slice(0, 10).map((movie) => (
        <img className='rounded-md'
          key={movie.id}
          src={`${imgUrl}${movie.poster_path}`}
          alt=""
        />
      ))}
    </div>
  );
};

export default TrendingMovies;
