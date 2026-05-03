import { Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EmptyState = ({ title, description, action }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center py-28 gap-6 text-center"
  >
    <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center
      ring-1 ring-white/10 shadow-xl shadow-black/40">
      <Film size={34} className="text-white/25" />
    </div>

    <div>
      <h3 className="text-cinema text-sm tracking-[0.18em] text-white/80 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-white/30 text-sm max-w-xs mx-auto leading-relaxed">{description}</p>
      )}
    </div>

    {action && (
      <Link
        to="/add"
        className="px-7 py-2.5 rounded-full text-sm font-bold text-white
          bg-[#E50914] hover:bg-[#ff1a29]
          transition-all duration-200
          hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]
          hover:scale-[1.04] active:scale-[0.97]
          shadow-lg shadow-red-900/30"
      >
        {action}
      </Link>
    )}
  </motion.div>
);

export default EmptyState;
