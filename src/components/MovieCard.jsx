import { useState } from 'react';
import { Star } from 'lucide-react';
import { POSTER_BASE_W300 } from '../services/tmdb';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
  const [imgError, setImgError] = useState(false);
  const year = movie.release_date?.substring(0, 4);
  const rating = movie.vote_average > 0 ? movie.vote_average.toFixed(1) : null;

  return (
    <div
      className="relative group rounded-xl overflow-hidden aspect-[2/3] cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-[1.06] hover:z-20
        ring-1 ring-white/8
        hover:ring-[#E50914]/50
        shadow-xl shadow-black/50
        hover:shadow-2xl hover:shadow-[#E50914]/20"
    >
      {/* Poster */}
      {!imgError && movie.poster_path ? (
        <img
          src={`${POSTER_BASE_W300}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover
            transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center
          bg-gradient-to-b from-slate-800/80 to-slate-950 gap-3 p-4">
          <span className="text-5xl">🎬</span>
          <span className="text-xs text-center text-white/40 leading-snug">{movie.title}</span>
        </div>
      )}

      {/* Alt gradient — daima görünür */}
      <div className="absolute inset-0 bg-gradient-to-t
        from-black via-black/40 to-transparent
        opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Puan rozeti — parlak sarı */}
      {rating && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1
          glass-strong rounded-full px-2 py-0.5
          text-yellow-400 text-[11px] font-black
          shadow-lg shadow-black/60">
          <Star size={9} fill="currentColor" />
          {rating}
        </div>
      )}

      {/* Hover kontrolleri */}
      <MovieControls movie={movie} type={type} />

      {/* Alt metin */}
      <div className="absolute bottom-0 left-0 right-0 p-3
        translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-sm font-bold leading-snug line-clamp-2 drop-shadow-lg">
          {movie.title}
        </h3>
        {year && (
          <p className="text-white/40 text-xs mt-0.5 font-medium">{year}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
