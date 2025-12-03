import React, { useState } from 'react';
import { api } from '../Services/GlobalAPI';
import { useLocation, useParams } from 'react-router-dom';

const { searchId, imgPosterUrl, imgUrl } = api;

const Details = () => {
  const [movies, setMovies] = useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function searchForId() {
      const data = await searchId(params.id);
      console.log(data);

      setMovies(data);
    }
    searchForId();
  }, []);

  return movies ? (
    <section className="">
      <div className="p-10 w-svw h-auto">
        <div className="relative">
          <img
            className="rounded-xl min-w-full shadow-xl shadow-black"
            src={`${imgPosterUrl}${movies.backdrop_path}`}
            alt={movies.title}
          />
          <div className=" w-auto h-auto z-20 sm:absolute static sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 pb-1 sm:text-center">
            <p className="md:text-3xl text-1xl font-bold">
              {movies.original_title}
            </p>
            <p className="text-xs">{movies.tagline}</p>
          </div>
        </div>
        <div className="flex pt-8 gap-8">
          <img
            className="rounded-xl hidden sm:block w-[150px] md:w-[300px] h-auto"
            src={`${imgUrl}${movies.poster_path}`}
            alt={movies.title}
          />
          <div>
            <p className="max-w-[400px]">{movies.overview}</p>
            <p className="text-xs pt-4">
              Data de lançamento: {movies.release_date}
            </p>
            <p className="text-xs pt-4">Nota: {movies.vote_average}</p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="w-full border-4 min-h-screen flex items-center justify-center">
      <div>
        <p className="rounded-full w-7 h-7 border-r-2 animate-spin"></p>
      </div>
    </section>
  );
};

export default Details;
