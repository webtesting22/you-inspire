import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MegaNavigation from './Components/Navigation/Navigation';
import CommonHomeRoutes from './Components/CommonHome/CommonHomeRoute';
import Podcast from './Components/SinglePodcast/Podcast';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <MegaNavigation />
      <Routes>
        {/* Set CommonHomeRoutes at "/" */}
        <Route path="/" element={<CommonHomeRoutes />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
