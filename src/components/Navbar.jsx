import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo text-gradient">
          <FaCoffee style={{ marginRight: '10px' }} />
          VELVET BREW
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#interior" className="nav-link">Interior</a>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
