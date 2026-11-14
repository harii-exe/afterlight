import React, { useState } from 'react';
interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

const FEATURED_HEROES = [
  {
    id: 'apollo11',
    name: 'Tranquility Base',
    destination: 'The Moon',
    image: '/img/apollo11/img1.jpg',
    caption: 'Buzz Aldrin deploying the seismic experiment beside the Lunar Module Descent Stage, July 1969.'
  },
  {
    id: 'opportunity',
    name: 'Meridiani Planum',
    destination: 'Mars',
    image: '/img/opportunity/img3.jpg',
    caption: 'The vast, wind-swept Martian plains of Orion Crater as seen by Opportunity.'
  },
  {
    id: 'cassini',
    name: 'Saturn\'s Grand Finale',
    destination: 'Saturn',
    image: '/img/cassini/img1.jpg',
    caption: 'The final plunge into Saturn\'s golden clouds to protect its ocean-bearing moons, September 2017.'
  },
  {
    id: 'voyager1',
    name: 'The Interstellar Frontier',
    destination: 'Interstellar Space',
    image: '/img/voyager1/img2.jpg',
    caption: 'Voyager 1 deep space probe ascending past the planets into the cosmic void.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoryClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentHero = FEATURED_HEROES[activeSlide];

  return (
    <section className="hero-landing">
      {/* Background Slides */}
      <div className="hero-backdrop-container">
        {FEATURED_HEROES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-backdrop-slide ${idx === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
        <div className="hero-atmospheric-gradient"></div>
        <div className="hero-grid-mesh"></div>
      </div>

      <div className="container hero-content-wrapper">
        {/* Eyebrow */}
        <div className="hero-eyebrow-row">
          <span className="eyebrow eyebrow-gold">NASA SPACE APPS CHALLENGE 2026 ARCHIVE</span>
          <div className="hero-telemetry-badge">
            <span className="status-pulse" style={{ color: '#38BDF8' }}></span>
            <span>9 HISTORIC MISSIONS DOCUMENTED</span>
          </div>
        </div>

        {/* Brand & Main Headline */}
        <div className="hero-headline-block">
          <span className="hero-brand-name">AFTERLIGHT</span>
          <h1 className="hero-title">
            <span className="title-line">THE MISSION ENDED.</span>
            <span className="title-line title-highlight">THE STORY DIDN'T.</span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="hero-lead">
          Across the Moon, Mars, and beyond, humanity left machines behind. Some completed their missions. Some failed. Others changed what we know about the universe. Their stories are still worth discovering.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button
            className="btn btn-primary"
            onClick={onExploreClick}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            Explore the Missions
          </button>

          <button
            className="btn btn-secondary"
            onClick={onStoryClick}
          >
            Discover the Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Quick Stats Strip */}
        <div className="hero-stats-strip">
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">Pioneering Probes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Planetary Frontiers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">54</span>
            <span className="stat-label">Authentic NASA Photos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15B+</span>
            <span className="stat-label">Miles Explored</span>
          </div>
        </div>

        {/* Bottom Hero Control Bar */}
        <div className="hero-footer-bar">
          <div className="hero-caption-box">
            <span className="caption-tag">NASA ARCHIVE VIEW:</span>
            <span className="caption-text">{currentHero.caption}</span>
          </div>

          <div className="hero-slide-nav">
            <span className="slide-nav-label">Vantage:</span>
            {FEATURED_HEROES.map((slide, idx) => (
              <button
                key={slide.id}
                className={`slide-pill ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`View ${slide.destination} backdrop`}
              >
                {slide.destination}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={onStoryClick}
        aria-label="Scroll to next section"
      >
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        <span className="scroll-label">SCROLL DOWN</span>
      </button>
    </section>
  );
};
