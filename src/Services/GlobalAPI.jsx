const API_KEY = import.meta.env.VITE_API_KEY;

const movieURL = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w300/';
const imgPosterUrl = 'https://image.tmdb.org/t/p/original/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const request = async (url, options) => {
  try {
    const call = await fetch(url, options);
    const response = await call.json();
    if (!call.ok) {
      const text = await call.text();
      console.error('[GlobalAPI] fetch error', call.status, text);
      return { results: [] };
    }
    return response;
  } catch (err) {
    console.error('[GlobalAPI] network error', err);
    return { results: [] };
  }
};

async function movieTrendings() {
  const data = await request(movieURL + '/movie/top_rated', options);
  return data;
}

async function moviePopular() {
  const data = await request(movieURL + '/movie/popular', options);
  return data;
}

async function searchId(id) {
  const data = await request(`${movieURL}/movie/${id}`, options);
  return data;
}

async function nowPlaying() {
  const data = await request(movieURL + '/movie/now_playing', options);
  return data;
}


export const api = {
  movieTrendings,
  movieURL,
  imgUrl,
  moviePopular,
  nowPlaying,
  imgPosterUrl,
  searchId,
};
