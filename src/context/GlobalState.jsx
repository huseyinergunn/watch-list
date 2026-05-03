import { createContext, useContext, useEffect, useReducer } from 'react';
import appReducer from './AppReducer';

export const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

const load = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const initialState = {
  watchlist: load('watchlist', []),
  watched: load('watched', []),
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) =>
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });

  const removeMovieFromWatchlist = (id) =>
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });

  const addMovieToWatched = (movie) =>
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });

  const moveToWatchlist = (movie) =>
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie });

  const removeMovieFromWatched = (id) =>
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id });

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
