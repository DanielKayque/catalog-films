import React from 'react';
import { api } from '../Services/GlobalAPI';

console.log(api.imgPosterUrl);
const { imgPosterUrl } = api;

const PopularMovies = ({ movies }) => {
  return (
    <div className="flex overflow-x-auto">
      {movies.slice(0, 6).map((movie) => (
        <img
          key={movie.id}
          src={`${imgPosterUrl}${movie.backdrop_path}`}
          alt={movie.title}
        ></img>
      ))}
    </div>
  );
};

export default PopularMovies;
