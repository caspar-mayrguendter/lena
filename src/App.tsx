import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Media from './pages/Media';
import Weddings from './pages/Weddings';
import Imprint from './pages/Imprint';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
