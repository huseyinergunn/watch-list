const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const POSTER_BASE_W300 = 'https://image.tmdb.org/t/p/w300';
export const POSTER_BASE_W92 = 'https://image.tmdb.org/t/p/w92';

const PLACEHOLDER = 'buraya_gercek_tmdb_api_anahtarinizi_yazin';
export const hasApiKey = () => Boolean(API_KEY && API_KEY.trim() && API_KEY !== PLACEHOLDER);

export async function searchMovies(query) {
  if (!hasApiKey()) {
    throw new Error('.env dosyasına geçerli bir VITE_TMDB_KEY eklenmemiş.');
  }
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=tr-TR&page=1&include_adult=false&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error(`TMDB API hatası: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  if (data.errors) {
    throw new Error(Array.isArray(data.errors) ? data.errors[0] : String(data.errors));
  }
  return data.results ?? [];
}
