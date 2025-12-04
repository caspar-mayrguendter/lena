import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Media from './pages/Media';
import Imprint from './pages/Imprint';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </Router>
  );
}

export default App;
