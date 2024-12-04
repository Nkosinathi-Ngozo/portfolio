import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavbarStyles.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');  // State to track active link

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSetActive = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav>
      <div className="logo">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => { closeMenu(); handleSetActive('home'); }}
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}  // Apply active class conditionally
        >
          Nkosinathi Ngozo
        </Link>
      </div>

      {/* Menu - Only visible when isMenuOpen is true */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul id="navbar">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => { closeMenu(); handleSetActive('home'); }} // Set active on click
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}  // Conditionally apply active class
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => { closeMenu(); handleSetActive('projects'); }}
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}  // Conditionally apply active class
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => { closeMenu(); handleSetActive('skills'); }}
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}  // Conditionally apply active class
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Toggle Button */}
      <div id="mobile" onClick={toggleMenu}>
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
}

export default Nav;
