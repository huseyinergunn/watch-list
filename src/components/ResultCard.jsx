import { useState, useContext } from 'react';
import { Plus, Eye, Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlobalContext } from '../context/GlobalState';
import { POSTER_BASE_W92 } from '../services/tmdb';

const ResultCard = ({ movie, index }) => {
  const [imgError, setImgError] = useState(false);
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  const inWatched  = watched.find((m) => m.id === movie.id);
  const inWatchlist = watchlist.find((m) => m.id === movie.id);
  const alreadyAdded = Boolean(inWatched || inWatchlist);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: index * 0.04 }}
      className="flex gap-3 p-3 rounded-xl
        glass hover:glass-strong
        border-white/6 hover:border-white/12
        transition-all duration-200"
    >
      {/* Poster */}
      <div className="shrink-0 w-11 h-16 rounded-lg overflow-hidden
        bg-white/5 flex items-center justify-center ring-1 ring-white/8">
        {!imgError && movie.poster_path ? (
          <img
            src={`${POSTER_BASE_W92}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xl">🎬</span>
        )}
      </div>

      {/* Bilgi */}
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-white font-semibold text-sm leading-snug line-clamp-2">
          {movie.title}
        </h4>
        <div className="flex items-center gap-2.5 mt-1.5">
          {movie.release_date && (
            <span className="text-white/35 text-xs">{movie.release_date.substring(0, 4)}</span>
          )}
          {movie.vote_average > 0 && (
            <span className="flex items-center gap-0.5 text-yellow-400 text-xs font-bold">
              <Star size={10} fill="currentColor" />
              {movie.vote_average.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      {/* Aksiyonlar */}
      <div className="flex items-center gap-1.5 shrink-0">
        {alreadyAdded ? (
          <span className="flex items-center gap-1 text-emerald-400 text-xs font-semibold px-2">
            <Check size={13} />
            Eklendi
          </span>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addMovieToWatchlist(movie)}
              title="İzleneceklere ekle"
              className="p-2 rounded-full glass hover:bg-blue-600/70
                text-white/50 hover:text-white
                transition-colors duration-150"
            >
              <Plus size={15} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => addMovieToWatched(movie)}
              title="İzlenenler listesine ekle"
              className="p-2 rounded-full glass hover:bg-[#E50914]/70
                text-white/50 hover:text-white
                transition-colors duration-150"
            >
              <Eye size={15} />
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ResultCard;
