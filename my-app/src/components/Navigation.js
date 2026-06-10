import React, { useState, useEffect } from 'react';
import './Navigation.css';

const navLinks = [
  { name: 'Trang chủ', id: 'home' },
  { name: 'Khái niệm', id: 'concepts' },
  { name: 'Nguyên lý', id: 'principles' },
  { name: 'Dự án', id: 'projects' },
  { name: 'Tài nguyên', id: 'resources' },
  { name: 'Về chúng tôi', id: 'about' }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link update logic based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span className="logo-hesd">HESD</span>
          <span className="logo-year">_2026</span>
        </div>

        <div className={`nav-links-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  className={`nav-link ${active === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="nav-right mobile-only">
            <div className="badge-2026">2026</div>
            <button className="register-btn">Đăng ký</button>
          </div>
        </div>

        <div className="nav-right desktop-only">
          <div className="badge-2026">2026</div>
          <button className="register-btn">Đăng ký</button>
        </div>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {mobileMenuOpen && <div className="overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navigation;
