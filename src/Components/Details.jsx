import React, { useState } from 'react';
import { api } from '../Services/GlobalAPI';
import { useLocation, useParams } from 'react-router-dom';

const { searchId, imgPosterUrl } = api;

const Details = () => {
  const [movies, setMovies] = useState(null);
  const params = useParams();
  // React.useEffect(() => {
  //   async function searchForId() {
  //     const data = await searchId(params.id);
  //     console.log(data);
  //     setMovies(data);
  //   }
  //   searchForId();
  // }, []);

  return movies ? (
    <section>
      <div className="p-10">
        <img
          src={`${imgPosterUrl}${movies.backdrop_path}`}
          alt={movies.title}
        />
      </div>
    </section>
  ) : (
    <section className="w-full border-4 min-h-screen flex items-center justify-center">
      <div>
        <p className='rounded-full w-7 h-7 border-r-2 animate-spin'></p>
      </div>
    </section>
  );
};

export default Details;
