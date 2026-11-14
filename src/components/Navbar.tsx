import React, { useState, useEffect } from 'react';
import type { Route } from '../router';
import { missionsData, MISSION_ORDER } from '../data/missionsData';
import { AudioAmbience } from './AudioAmbience';

interface NavbarProps {
  currentRoute: Route;
  onNavigate: (r: Route) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [missionsDropdownOpen, setMissionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (r: Route) => {
    onNavigate(r);
    setMobileMenuOpen(false);
    setMissionsDropdownOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <button
          className="navbar-brand"
          onClick={() => handleNav({ page: 'home' })}
          aria-label="AFTERLIGHT Homepage"
        >
          <span className="brand-beacon">
            <span className="beacon-dot"></span>
            <span className="beacon-ring"></span>
          </span>
          <div className="brand-text">
            <span className="brand-title">AFTERLIGHT</span>
            <span className="brand-subtitle">SPACE APPS 2026</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <button
            className={`nav-link ${currentRoute.page === 'home' ? 'active' : ''}`}
            onClick={() => handleNav({ page: 'home' })}
          >
            Overview
          </button>

          {/* Missions dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link nav-dropdown-trigger ${
                currentRoute.page === 'missions' || currentRoute.page === 'mission' ? 'active' : ''
              }`}
              onClick={() => setMissionsDropdownOpen(!missionsDropdownOpen)}
              onMouseEnter={() => setMissionsDropdownOpen(true)}
              aria-expanded={missionsDropdownOpen}
            >
              Missions
              <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {missionsDropdownOpen && (
              <div
                className="nav-dropdown-menu"
                onMouseLeave={() => setMissionsDropdownOpen(false)}
              >
                <div className="dropdown-header">
                  <span>9 NASA Historic Chapters</span>
                  <button
                    className="dropdown-all-btn"
                    onClick={() => handleNav({ page: 'missions' })}
                  >
                    View All →
                  </button>
                </div>
                <div className="dropdown-grid">
                  {MISSION_ORDER.map((id) => {
                    const m = missionsData[id];
                    return (
                      <button
                        key={id}
                        className={`dropdown-item ${
                          currentRoute.page === 'mission' && currentRoute.mission === id ? 'selected' : ''
                        }`}
                        onClick={() => handleNav({ page: 'mission', mission: id })}
                      >
                        <span className="dropdown-item-dest">{m.destination}</span>
                        <span className="dropdown-item-name">{m.name}</span>
                        <span className="dropdown-item-status">{m.classification}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            className={`nav-link ${currentRoute.page === 'explore' ? 'active' : ''}`}
            onClick={() => handleNav({ page: 'explore' })}
          >
            Solar System Map
          </button>

          <button
            className={`nav-link ${currentRoute.page === 'discoveries' ? 'active' : ''}`}
            onClick={() => handleNav({ page: 'discoveries' })}
          >
            Discoveries
          </button>

          <button
            className={`nav-link ${currentRoute.page === 'about' ? 'active' : ''}`}
            onClick={() => handleNav({ page: 'about' })}
          >
            The Story
          </button>
        </nav>

        {/* Ambient Audio & Action */}
        <div className="navbar-actions">
          <AudioAmbience />
          <button
            className="btn btn-primary btn-sm nav-cta"
            onClick={() => handleNav({ page: 'explore' })}
          >
            Explore
          </button>

          {/* Mobile hamburger */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            <button
              className={`mobile-link ${currentRoute.page === 'home' ? 'active' : ''}`}
              onClick={() => handleNav({ page: 'home' })}
            >
              Overview
            </button>
            <button
              className={`mobile-link ${currentRoute.page === 'explore' ? 'active' : ''}`}
              onClick={() => handleNav({ page: 'explore' })}
            >
              Solar System Map
            </button>
            <button
              className={`mobile-link ${currentRoute.page === 'missions' ? 'active' : ''}`}
              onClick={() => handleNav({ page: 'missions' })}
            >
              All 9 Missions
            </button>
            <button
              className={`mobile-link ${currentRoute.page === 'discoveries' ? 'active' : ''}`}
              onClick={() => handleNav({ page: 'discoveries' })}
            >
              Scientific Discoveries
            </button>
            <button
              className={`mobile-link ${currentRoute.page === 'about' ? 'active' : ''}`}
              onClick={() => handleNav({ page: 'about' })}
            >
              About AFTERLIGHT
            </button>

            <div className="mobile-divider"></div>

            <div className="mobile-missions-list">
              <span className="mobile-missions-title">DIRECT MISSION ACCESS</span>
              {MISSION_ORDER.map((id) => (
                <button
                  key={id}
                  className="mobile-mission-item"
                  onClick={() => handleNav({ page: 'mission', mission: id })}
                >
                  <span>{missionsData[id].name}</span>
                  <span className="mobile-dest-badge">{missionsData[id].destination}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
