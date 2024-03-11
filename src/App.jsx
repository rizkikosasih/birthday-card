import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import bgMusic from './assets/music/hbd-piano.mp3';

const App = () => {
  const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;

  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          <Route path="/" element={<Home audioRef={audioRef} />} />
          <Route path="*" element={<PageNotFound audioRef={audioRef} />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
