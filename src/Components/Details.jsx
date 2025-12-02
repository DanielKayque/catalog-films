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
      <div className="p-10 border-2 w-svw h-svh">
        <div className=" w-auto h-auto border-4 p-12 md:p-0 z-20">
          <p className="text-2xl">{movies.original_title}</p>
        </div>
        <img
          className="rounded-xl min-w-full"
          src={`${imgPosterUrl}${movies.backdrop_path}`}
          alt={movies.title}
        />
        <div>
          <p>{movies.tagline}</p>
          <p className="max-w-[400px]">{movies.overview}</p>
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
