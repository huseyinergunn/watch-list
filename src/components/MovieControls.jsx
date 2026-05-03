import { useContext } from 'react';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalContext } from '../context/GlobalState';

const Btn = ({ onClick, title, color, children }) => (
  <motion.button
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    title={title}
    className={`p-3 rounded-full text-white font-semibold
      transition-colors duration-200 shadow-xl shadow-black/60
      ${color}`}
  >
    {children}
  </motion.button>
);

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeMovieFromWatched } =
    useContext(GlobalContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        className="absolute inset-0 flex items-center justify-center gap-3
          opacity-0 group-hover:opacity-100 transition-opacity duration-250"
      >
        {type === 'watchlist' && (
          <>
            <Btn
              onClick={() => addMovieToWatched(movie)}
              title="İzlendi olarak işaretle"
              color="bg-emerald-600 hover:bg-emerald-500 hover:neon-green"
            >
              <Eye size={18} />
            </Btn>
            <Btn
              onClick={() => removeMovieFromWatchlist(movie.id)}
              title="Listeden kaldır"
              color="bg-[#E50914] hover:bg-[#ff1a29] hover:neon-red"
            >
              <Trash2 size={18} />
            </Btn>
          </>
        )}

        {type === 'watched' && (
          <>
            <Btn
              onClick={() => moveToWatchlist(movie)}
              title="İzleneceklere taşı"
              color="bg-blue-600 hover:bg-blue-500 hover:neon-blue"
            >
              <EyeOff size={18} />
            </Btn>
            <Btn
              onClick={() => removeMovieFromWatched(movie.id)}
              title="Listeden kaldır"
              color="bg-[#E50914] hover:bg-[#ff1a29] hover:neon-red"
            >
              <Trash2 size={18} />
            </Btn>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieControls;
