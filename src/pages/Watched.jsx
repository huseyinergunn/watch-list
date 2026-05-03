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

const Watched = () => {
  const { watched } = useContext(GlobalContext);

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
          <p className="text-emerald-400 text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
            — Geçmişim
          </p>
          <h1 className="text-cinema text-3xl md:text-4xl tracking-[0.08em] text-white leading-none">
            İzlenenler
          </h1>
        </div>
        {watched.length > 0 && (
          <span className="glass-strong rounded-full px-4 py-1.5
            text-white/50 text-sm font-semibold tracking-wide">
            {watched.length}&nbsp;film
          </span>
        )}
      </div>

      {watched.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {watched.map((movie, i) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: i * 0.045 }}
            >
              <MovieCard movie={movie} type="watched" />
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState
          title="Henüz Film Yok"
          description="İzlediğiniz filmleri işaretleyin, burada görünsün."
          action="Film Keşfet"
        />
      )}
    </motion.div>
  );
};

export default Watched;
