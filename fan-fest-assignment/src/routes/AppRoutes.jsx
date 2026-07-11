import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Router>
      {/* Navbar Routes ke bahar rakha hai taaki har page par dikhe */}
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aage ke pages jaise /tickets yahan aayenge */}
        </Routes>
      </main>
    </Router>
  );
};

export default AppRoutes;