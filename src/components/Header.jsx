import { Link, useLocation } from 'react-router-dom';
import { Eye, Plus } from 'lucide-react';
import LogoIcon from './LogoIcon';

const Header = () => {
  const { pathname } = useLocation();

  const navLink = (path, label, icon) => {
    const active = pathname === path;
    return (
      <Link
        to={path}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
          transition-all duration-200
          ${active
            ? 'glass-strong text-white'
            : 'text-white/50 hover:text-white hover:glass'
          }`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5 shadow-2xl shadow-black/40">
      <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/add" className="flex items-center gap-2.5 group">
          <LogoIcon size={44} className="drop-shadow-lg transition-transform duration-300 group-hover:scale-105" />
          <span
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.02em' }}
            className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors"
          >
            WatchList
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1.5">
          {navLink('/watchlist', 'İzlenecekler', null)}
          {navLink('/watched', 'İzlenenler', <Eye size={13} />)}

          <Link
            to="/add"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold
              bg-[#E50914] text-white
              hover:bg-[#ff0f1f]
              transition-all duration-200
              hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]
              hover:scale-[1.04] active:scale-[0.97]
              shadow-lg shadow-red-900/30"
          >
            <Plus size={15} strokeWidth={2.5} />
            Film Ekle
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
