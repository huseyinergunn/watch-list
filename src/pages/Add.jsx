import { useState } from 'react';
import { Search, AlertCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ResultCard from '../components/ResultCard';
import { SkeletonResultCard } from '../components/SkeletonCard';
import ApiKeyWarning from '../components/ApiKeyWarning';
import { useMovieSearch } from '../hooks/useMovieSearch';
import { hasApiKey } from '../services/tmdb';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
};

const Add = () => {
  const [query, setQuery]     = useState('');
  const [focused, setFocused] = useState(false);
  const { results, loading, error, search, clearResults } = useMovieSearch();
  const apiKeyMissing = !hasApiKey();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  const handleClear = () => {
    setQuery('');
    clearResults();
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {/* ── Sinematik Hero ── */}
      <div className="relative overflow-hidden pt-20 pb-14 px-4 text-center">
        {/* Arka ışık */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2
          w-[700px] h-[350px] rounded-full
          bg-[#E50914]/8 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Üst etiket */}
          <div className="inline-flex items-center gap-2 mb-6
            px-4 py-1.5 rounded-full glass-strong
            text-[#E50914] text-[11px] font-bold tracking-[0.2em] uppercase">
            🎬 &nbsp; Sinema Dünyası Sizi Bekliyor
          </div>

          {/* Ana başlık — Bebas Neue sinema afişi stili */}
          <h1
            className="mb-5 leading-none select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              letterSpacing: '0.06em',
              background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 40%, #E50914 130%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 40px rgba(229,9,20,0.25)) drop-shadow(0 4px 24px rgba(0,0,0,0.8))',
            }}
          >
            Film Keşfet
          </h1>

          <p className="text-white/40 text-sm md:text-base leading-relaxed">
            Milyonlarca film arasından arama yap,<br />
            izlenecek ve izlenen listene anında ekle.
          </p>
        </motion.div>
      </div>

      {/* ── Arama + Sonuçlar ── */}
      <div className="max-w-2xl mx-auto px-4 pb-16">

        {apiKeyMissing && (
          <div className="mb-6">
            <ApiKeyWarning />
          </div>
        )}

        {/* Glow input wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative mb-8"
        >
          {/* Neon glow halkası */}
          <div
            className="absolute -inset-px rounded-2xl transition-opacity duration-400 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #E50914)',
              opacity: focused ? 0.7 : 0,
              filter: 'blur(6px)',
            }}
          />
          <div className="relative flex items-center">
            <Search size={17} className="absolute left-4.5 text-white/30 pointer-events-none z-10" />
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Film adı girin..."
              disabled={apiKeyMissing}
              className="w-full glass-strong rounded-2xl
                pl-12 pr-11 py-4
                text-white placeholder-white/25 text-sm font-medium
                border border-white/8 focus:border-white/20
                focus:outline-none transition-colors duration-200
                disabled:opacity-40 disabled:cursor-not-allowed"
            />
            {query && (
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleClear}
                className="absolute right-4 p-1 text-white/30 hover:text-white/70
                  transition-colors rounded-full"
              >
                <X size={15} />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Skeleton */}
        {loading && (
          <div className="flex flex-col gap-2.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonResultCard key={i} />
            ))}
          </div>
        )}

        {/* Hata */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-3 text-red-400
              bg-[#E50914]/10 border border-[#E50914]/30 rounded-xl p-4"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold">Bir hata oluştu</p>
              <p className="text-xs text-red-400/60 mt-0.5">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Sonuçlar */}
        {!loading && !error && results.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-white/20 text-xs mb-2 px-1 tracking-wider uppercase">
              {results.length} Sonuç
            </p>
            {results.map((movie, i) => (
              <ResultCard key={movie.id} movie={movie} index={i} />
            ))}
          </div>
        )}

        {/* Sonuç yok */}
        {!loading && !error && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-cinema text-xs tracking-[0.2em] text-white/40 mb-2">
              Sonuç Bulunamadı
            </p>
            <p className="text-white/25 text-sm">
              "{query}" için eşleşme yok. Farklı bir terim deneyin.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Add;
