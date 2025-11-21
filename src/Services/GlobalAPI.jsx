const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const movieURL = 'https://api.themoviedb.org/3';
const imgUrl = `https://image.tmdb.org/t/p/w200/`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

const request = async (url, options) => {
  const call = await fetch(url, options);
  const response = await call.json();
  return response;
};

async function movieTrendings() {
  const data = await request(movieURL + '/movie/top_rated', options);
  return data;
}

export const api = {
  movieTrendings,
  movieURL,
  imgUrl,
};
