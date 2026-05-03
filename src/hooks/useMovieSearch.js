import { useState, useCallback, useRef } from 'react';
import { searchMovies } from '../services/tmdb';

export function useMovieSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  const search = useCallback((query) => {
    clearTimeout(debounceRef.current);

    if (!query.trim()) {
      setResults([]);
      setError(null);
      setLoading(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchMovies(query);
        setResults(data);
      } catch (err) {
        setError(err.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);
  }, []);

  const clearResults = useCallback(() => {
    clearTimeout(debounceRef.current);
    setResults([]);
    setError(null);
    setLoading(false);
  }, []);

  return { results, loading, error, search, clearResults };
}
