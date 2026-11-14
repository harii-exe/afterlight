import React, { useState, useRef } from 'react';
import type { Route } from '../router';
import { missionsData, MISSION_ORDER } from '../data/missionsData';
import { Hero } from '../components/Hero';
import { MissionCard } from '../components/MissionCard';
import { SolarSystemMap } from '../components/SolarSystemMap';

interface HomePageProps {
  onNavigate: (r: Route) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedDestination, setSelectedDestination] = useState<'all' | 'moon' | 'mars' | 'deep-space'>('all');
  const storySectionRef = useRef<HTMLElement>(null);
  const missionsSectionRef = useRef<HTMLElement>(null);

  const scrollToStory = () => {
    storySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMissions = () => {
    missionsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredMissionIds = MISSION_ORDER.filter((id) => {
    if (selectedDestination === 'all') return true;
    return missionsData[id].destinationGroup === selectedDestination;
  });

  return (
    <div className="homepage-root">
      {/* 1. HERO INTRODUCTION */}
      <Hero
        onExploreClick={scrollToMissions}
        onStoryClick={scrollToStory}
      />

      {/* 2. THE STORY BEHIND AFTERLIGHT */}
      <section ref={storySectionRef} id="story-section" className="section story-editorial-section">
        <div className="container">
          <div className="story-editorial-grid">
            <div className="story-text-pane">
              <span className="eyebrow eyebrow-gold">TIME CAPSULES IN DEEP SPACE</span>
              <h2 className="story-heading">
                Monuments in the Dark
              </h2>
              <p className="lead story-lead">
                Between 1967 and today, humanity launched brave robotic explorers and astronauts into the cold blackness of space. We gave them metal bones, computer eyes, and nuclear or solar hearts.
              </p>
              <p className="story-paragraph">
                When their primary missions ended, we could not bring them home. Across the grey dust of the Moon, the red plains of Mars, and the stormy clouds of Saturn, their hardware remains standing.
              </p>
              <p className="story-paragraph">
                They are not just dead space junk. They are time capsules of human courage, scientific benchmarks, and physical markers of the moment humans reached out to touch other worlds.
              </p>
              <div className="story-cta-box">
                <span className="story-motto">"Every mission leaves a light behind."</span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'about' })}
                >
                  Read the Full Ethos →
                </button>
              </div>
            </div>

            <div className="story-visual-pane">
              <div className="story-image-card">
                <img
                  src="/img/apollo11/img3.jpg"
                  alt="Apollo 11 Lunar Module footpad on lunar surface"
                  className="story-featured-img"
                  loading="lazy"
                />
                <div className="story-image-caption">
                  <span className="caption-tag">ARCHAEOLOGICAL RECORD:</span>
                  <p>Apollo 11 Eagle Descent Stage footpad resting in Mare Tranquillitatis regolith. Still undisturbed after more than half a century.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE THE NINE MISSIONS */}
      <section ref={missionsSectionRef} id="missions-section" className="section missions-showcase-section">
        <div className="container">
          <div className="missions-header-row">
            <div>
              <span className="eyebrow eyebrow-cyan">NINE CHAPTERS OF EXPLORATION</span>
              <h2 className="section-title">The Missions</h2>
              <p className="section-subtitle">
                Explore the nine milestone NASA missions preserved in the AFTERLIGHT archive.
              </p>
            </div>

            {/* Destination filter buttons */}
            <div className="destination-pills">
              <button
                className={`pill-btn ${selectedDestination === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedDestination('all')}
              >
                All (9)
              </button>
              <button
                className={`pill-btn ${selectedDestination === 'moon' ? 'active' : ''}`}
                onClick={() => setSelectedDestination('moon')}
              >
                The Moon (2)
              </button>
              <button
                className={`pill-btn ${selectedDestination === 'mars' ? 'active' : ''}`}
                onClick={() => setSelectedDestination('mars')}
              >
                Mars Surface (5)
              </button>
              <button
                className={`pill-btn ${selectedDestination === 'deep-space' ? 'active' : ''}`}
                onClick={() => setSelectedDestination('deep-space')}
              >
                Deep Space & Saturn (2)
              </button>
            </div>
          </div>

          {/* Missions Grid */}
          <div className="missions-grid">
            {filteredMissionIds.map((id) => (
              <MissionCard
                key={id}
                mission={missionsData[id]}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SOLAR SYSTEM EXPLORATION */}
      <section id="solar-map-section" className="section solar-map-section">
        <div className="container">
          <SolarSystemMap onNavigate={onNavigate} />
        </div>
      </section>

      {/* 5. FEATURED ABANDONED & LEFT-BEHIND HARDWARE */}
      <section id="hardware-section" className="section featured-hardware-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow eyebrow-gold">SURFACE RELICS</span>
            <h2 className="section-title">Hardware Resting on Other Worlds</h2>
            <p className="section-subtitle">
              A photographic inspection of the actual physical machines humanity left behind on planetary surfaces.
            </p>
          </div>

          <div className="hardware-spotlight-carousel">
            {/* Apollo 11 */}
            <div className="hardware-relic-card">
              <div className="relic-img-wrap">
                <img
                  src="/img/apollo11/img4.jpg"
                  alt="Apollo 11 Lunar Module Descent Stage"
                  className="relic-img"
                  loading="lazy"
                />
                <span className="relic-dest-badge badge badge-gold">The Moon</span>
              </div>
              <div className="relic-details">
                <span className="relic-classification">Intentionally Abandoned</span>
                <h3 className="relic-title">Eagle Descent Stage</h3>
                <p className="relic-site">Tranquility Base · Mare Tranquillitatis</p>
                <p className="relic-desc">
                  Left behind on July 21, 1969 to serve as the launch platform for the ascent stage. Today, it stands as the cornerstone monument of human spaceflight.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'mission', mission: 'apollo11' })}
                >
                  Inspect Apollo 11 →
                </button>
              </div>
            </div>

            {/* Surveyor 3 */}
            <div className="hardware-relic-card">
              <div className="relic-img-wrap">
                <img
                  src="/img/surveyor3/img2.jpg"
                  alt="Apollo 12 Astronaut visiting Surveyor 3"
                  className="relic-img"
                  loading="lazy"
                />
                <span className="relic-dest-badge badge badge-gold">The Moon</span>
              </div>
              <div className="relic-details">
                <span className="relic-classification">Visited Time Capsule</span>
                <h3 className="relic-title">Surveyor 3 Lander</h3>
                <p className="relic-site">Ocean of Storms Crater</p>
                <p className="relic-desc">
                  Landed in 1967. In 1969, Apollo 12 astronauts walked to the site and retrieved its TV camera, conducting the world's first field study of hardware aged in deep space.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'mission', mission: 'surveyor3' })}
                >
                  Inspect Surveyor 3 →
                </button>
              </div>
            </div>

            {/* Opportunity */}
            <div className="hardware-relic-card">
              <div className="relic-img-wrap">
                <img
                  src="/img/opportunity/img1.jpg"
                  alt="Opportunity Rover on Martian Surface"
                  className="relic-img"
                  loading="lazy"
                />
                <span className="relic-dest-badge badge badge-mars">Mars</span>
              </div>
              <div className="relic-details">
                <span className="relic-classification">Decommissioned Equipment</span>
                <h3 className="relic-title">Opportunity Rover</h3>
                <p className="relic-site">Perseverance Valley · Endeavour Crater</p>
                <p className="relic-desc">
                  Traveled over 28 miles across 15 years. It rests quietly on the rim of Endeavour Crater after a catastrophic 2018 dust storm finally blocked sunlight from its solar wings.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'mission', mission: 'opportunity' })}
                >
                  Inspect Opportunity →
                </button>
              </div>
            </div>

            {/* Cassini */}
            <div className="hardware-relic-card">
              <div className="relic-img-wrap">
                <img
                  src="/img/cassini/img1.jpg"
                  alt="Cassini Grand Finale Plunge"
                  className="relic-img"
                  loading="lazy"
                />
                <span className="relic-dest-badge badge badge-cyan">Saturn</span>
              </div>
              <div className="relic-details">
                <span className="relic-classification">Planetary Protection Disposal</span>
                <h3 className="relic-title">Cassini Orbiter</h3>
                <p className="relic-site">Upper Atmosphere of Saturn</p>
                <p className="relic-desc">
                  Deliberately plunged into Saturn's crushing atmosphere on September 15, 2017 to protect potentially habitable ocean moons Enceladus and Titan from terrestrial contamination.
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onNavigate({ page: 'mission', mission: 'cassini' })}
                >
                  Inspect Cassini →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SCIENTIFIC DISCOVERIES THAT STILL MATTER */}
      <section id="science-section" className="section scientific-highlights-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow eyebrow-cyan">ENDURING SCIENCE</span>
            <h2 className="section-title">Discoveries That Still Matter</h2>
            <p className="section-subtitle">
              Decades after their transmitters fell silent, the data gathered by these missions continues to drive modern astrophysics and planetary exploration.
            </p>
          </div>

          <div className="science-highlights-grid">
            <div className="science-highlight-card">
              <span className="science-tag">Moon Quakes & Distance</span>
              <h3 className="science-title">Bouncing Lasers off the Moon</h3>
              <p className="science-desc">
                Apollo 11 left a mirror on the Moon that scientists still hit with lasers today. It proved the Moon is drifting away by 1.5 inches each year!
              </p>
              <div className="science-meta">
                <span>Mission: Apollo 11</span>
                <span className="status-live">Active Data Return</span>
              </div>
            </div>

            <div className="science-highlight-card">
              <span className="science-tag">Martian Water</span>
              <h3 className="science-title">Sheets of Ice Under Martian Dust</h3>
              <p className="science-desc">
                Phoenix scraped into the ground and found pure water ice just inches down. Future human astronauts can use this buried ice for drinking water and rocket fuel!
              </p>
              <div className="science-meta">
                <span>Mission: Phoenix</span>
                <span>Foundation for Artemis Mars</span>
              </div>
            </div>

            <div className="science-highlight-card">
              <span className="science-tag">Alien Environments</span>
              <h3 className="science-title">Ancient Yellowstone on Mars!</h3>
              <p className="science-desc">
                Spirit's jammed wheel plowed through the soil and uncovered white silica — proof that Mars once had bubbling volcanic hot springs where alien microbes could have thrived!
              </p>
              <div className="science-meta">
                <span>Mission: Spirit (MER-A)</span>
                <span>Primary Target for Mars 2020</span>
              </div>
            </div>

            <div className="science-highlight-card">
              <span className="science-tag">Ocean Worlds</span>
              <h3 className="science-title">Giant Geysers Spraying into Space</h3>
              <p className="science-desc">
                Cassini flew straight through icy plumes erupting from Saturn's moon Enceladus, finding salt, water, and warm hydrothermal vents in a hidden underground ocean!
              </p>
              <div className="science-meta">
                <span>Mission: Cassini-Huygens</span>
                <span>Spurred Dragonfly & Ocean Probes</span>
              </div>
            </div>

            <div className="science-highlight-card">
              <span className="science-tag">Deep Space Boundary</span>
              <h3 className="science-title">First Machine Between the Stars</h3>
              <p className="science-desc">
                Voyager 1 traveled past the edge of the Sun's magnetic bubble in 2012, becoming humanity's very first machine to explore cold interstellar space.
              </p>
              <div className="science-meta">
                <span>Mission: Voyager 1</span>
                <span className="status-live">Still Transmitting</span>
              </div>
            </div>

            <div className="science-highlight-card">
              <span className="science-tag">Space Robotics</span>
              <h3 className="science-title">The 6-Wheel Robot Climbing System</h3>
              <p className="science-desc">
                Tiny Sojourner tested the rocker-bogie wheel system in 1997. It worked so well that every NASA Mars rover since uses this exact same climbing suspension!
              </p>
              <div className="science-meta">
                <span>Mission: Mars Pathfinder</span>
                <span>Standard of Planetary Mobility</span>
              </div>
            </div>
          </div>

          <div className="science-cta-wrap">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate({ page: 'discoveries' })}
            >
              Explore Full Scientific Catalog →
            </button>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CINEMATIC SECTION */}
      <section className="closing-cinematic-section">
        <div className="closing-backdrop-overlay"></div>
        <div className="container closing-content">
          <span className="eyebrow eyebrow-gold">EPILOGUE</span>
          <h2 className="closing-headline">
            Every Mission Leaves a Light Behind.
          </h2>
          <p className="closing-lead">
            Humanity's journey to the stars is paved by the quiet machines resting in the dust. They crossed millions of miles so that we could see what lies beyond our horizon.
          </p>
          <div className="closing-action-row">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate({ page: 'missions' })}
            >
              Enter the Mission Archive
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onNavigate({ page: 'explore' })}
            >
              Open Solar System Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
