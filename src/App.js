import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Programs from './pages/Programs';
import Recipes from './pages/Recipes';
import Policy from './pages/Policy';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-vh-100">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;