import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MegaNavigation from './Components/Navigation/Navigation';
import CommonHomeRoutes from './Components/CommonHome/CommonHomeRoute';
import Podcast from './Components/SinglePodcast/Podcast';
import Footer from './Components/Footer/Footer';
import WhatsAppButton from './Components/WhatsappBtn/WhatsappBtn';
import AboutBrand from './Components/AboutUs/AboutBrand';

function App() {
  return (
    <Router>
      <MegaNavigation />
      <Routes>
        {/* Set CommonHomeRoutes at "/" */}
        <Route path="/" element={<CommonHomeRoutes />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/about-us" element={<AboutBrand />} />
      </Routes>
      <WhatsAppButton/>
      <Footer />
    </Router>
  );
}

export default App;
