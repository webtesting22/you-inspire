import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MegaNavigation from './Components/Navigation/Navigation';
import CommonHomeRoutes from './Components/CommonHome/CommonHomeRoute';

function App() {
  return (
    <Router>
      <MegaNavigation />
      <Routes>
        {/* Set CommonHomeRoutes at "/" */}
        <Route path="/" element={<CommonHomeRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
