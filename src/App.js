import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Luna from './pages/luna';
import Isak from './pages/isak';

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path='/luna' element={<Luna />} />
                <Route path='/isak' element={<Isak />} />
            </Routes>
    </Router>
  );
}

export default App;
