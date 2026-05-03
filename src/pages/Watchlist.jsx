import { useContext } from 'react';
import { motion } from 'framer-motion';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';
import EmptyState from '../components/EmptyState';

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -18 },
};

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.26, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-4 py-10"
    >
      {/* Başlık */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[#E50914] text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
            — Koleksiyonum
          </p>
          <h1 className="text-cinema text-3xl md:text-4xl tracking-[0.08em] text-white leading-none">
            İzlenecekler
          </h1>
        </div>
        {watchlist.length > 0 && (
          <span className="glass-strong rounded-full px-4 py-1.5
            text-white/50 text-sm font-semibold tracking-wide">
            {watchlist.length}&nbsp;film
          </span>
        )}
      </div>

      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {watchlist.map((movie, i) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: i * 0.045 }}
            >
              <MovieCard movie={movie} type="watchlist" />
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Liste Boş"
          description="İzlemek istediğiniz filmleri arayarak buraya ekleyin."
          action="Film Keşfet"
        />
      )}
    </motion.div>
  );
};

export default Watchlist;
