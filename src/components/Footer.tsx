import React from 'react';
import type { Route } from '../router';
import { missionsData } from '../data/missionsData';

interface FooterProps {
  onNavigate: (r: Route) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Upper Footer quote */}
        <div className="footer-quote-section">
          <p className="footer-quote">
            "Across the Moon, Mars, and beyond, humanity left machines behind. Some completed their missions. Some failed. Others changed what we know about the universe. Their stories are still worth discovering."
          </p>
          <span className="footer-tagline">— AFTERLIGHT · EVERY MISSION LEAVES A LIGHT BEHIND.</span>
        </div>

        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <span className="brand-beacon">
                <span className="beacon-dot"></span>
                <span className="beacon-ring"></span>
              </span>
              <span className="footer-brand-title">AFTERLIGHT</span>
            </div>
            <p className="footer-desc">
              A digital science museum and cinematic exploration archive documenting humanity's robotic diaspora across the solar system.
            </p>
            <div className="footer-badge-wrap">
              <span className="badge badge-gold">NASA Space Apps Challenge 2026</span>
            </div>
          </div>

          {/* Missions Col: The Moon & Deep Space */}
          <div className="footer-col">
            <h4 className="footer-col-title">The Moon & Outer Void</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'apollo11' })}>
                  {missionsData.apollo11.name} <span className="footer-sub">(Lunar Surface)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'surveyor3' })}>
                  {missionsData.surveyor3.name} <span className="footer-sub">(Ocean of Storms)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'cassini' })}>
                  {missionsData.cassini.name} <span className="footer-sub">(Saturn)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'voyager1' })}>
                  {missionsData.voyager1.name} <span className="footer-sub">(Interstellar)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Missions Col: Mars Surface */}
          <div className="footer-col">
            <h4 className="footer-col-title">The Red Planet</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'viking1' })}>
                  {missionsData.viking1.name} <span className="footer-sub">(Chryse Planitia)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'pathfinder' })}>
                  {missionsData.pathfinder.name} <span className="footer-sub">(Sojourner)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'spirit' })}>
                  {missionsData.spirit.name} <span className="footer-sub">(Gusev Crater)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'opportunity' })}>
                  {missionsData.opportunity.name} <span className="footer-sub">(Meridiani Planum)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'phoenix' })}>
                  {missionsData.phoenix.name} <span className="footer-sub">(Polar Ice)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Exploration & Archives */}
          <div className="footer-col">
            <h4 className="footer-col-title">Archive Navigation</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigate({ page: 'home' })}>
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'explore' })}>
                  Interactive Solar System
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'missions' })}>
                  All 9 Missions Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'discoveries' })}>
                  Scientific Discoveries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ page: 'about' })}>
                  The Story Behind Afterlight
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower footer copyright & data attribution */}
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <span>© 2026 AFTERLIGHT Project. Created for NASA Space Apps Challenge 2026.</span>
            <span>All imagery and scientific data courtesy of NASA, JPL-Caltech, JSC, KSC, and the NASA Image and Video Library.</span>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
