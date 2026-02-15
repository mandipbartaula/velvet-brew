import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <footer style={{ background: '#0a0a0a', padding: '2rem', textAlign: 'center', marginTop: 'auto', borderTop: '1px solid #333' }}>
        <p style={{ color: '#a0a0a0' }}>&copy; 2026 Velvet Brew Cafe. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#" style={{ color: '#a0a0a0' }}>Instagram</a>
          <a href="#" style={{ color: '#a0a0a0' }}>Twitter</a>
          <a href="#" style={{ color: '#a0a0a0' }}>Facebook</a>
        </div>
      </footer>
    </>
  );
}

export default App;
