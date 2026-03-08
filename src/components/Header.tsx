'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/button/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="contentBx">
        <Link href="/" className="logo">Solutioneers Info.</Link>

        {/* Nav is back inside! Toggles the 'open' class based on state */}
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="#services" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        <div className="cta">
          <Button href="/#contact" text="Get in Touch" />
        </div>

        {/* Added dynamic active class for hamburger animation */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  )
}