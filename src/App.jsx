import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        {/* z-10+ → body::before/after pseudo-elementlerinin üstünde */}
        <div className="relative z-10 min-h-screen text-white">
          <Header />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
