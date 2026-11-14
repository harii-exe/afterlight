import React from 'react';
import type { Route } from '../router';
import { SolarSystemMap } from '../components/SolarSystemMap';
import { missionsData } from '../data/missionsData';

interface ExplorePageProps {
  onNavigate: (r: Route) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ onNavigate }) => {
  return (
    <div className="explore-page-root">
      <div className="explore-hero-strip">
        <div className="container">
          <span className="eyebrow eyebrow-cyan">CELESTIAL CARTOGRAPHY</span>
          <h1 className="explore-page-title">Interactive Solar System</h1>
          <p className="lead explore-page-lead">
            Trace humanity's mechanical emissaries from the Moon to the outer bounds of the heliosphere. Click any celestial marker to inspect its location, hardware, and operational status.
          </p>
        </div>
      </div>

      <div className="container explore-map-container">
        <SolarSystemMap onNavigate={onNavigate} />
      </div>

      {/* Destination Directory Strip */}
      <section className="section explore-destinations-strip">
        <div className="container">
          <h2 className="destinations-strip-title">Frontiers of the Mission Fleet</h2>
          <div className="destinations-summary-grid">
            <div className="dest-summary-card">
              <span className="badge badge-gold">THE MOON</span>
              <h3 className="dest-name">Earth-Moon System</h3>
              <p className="dest-desc">
                Tranquility Base and Ocean of Storms. The site of Apollo 11's historic descent stage and the Surveyor 3 lander visited by Apollo 12.
              </p>
              <div className="dest-mission-links">
                <button onClick={() => onNavigate({ page: 'mission', mission: 'apollo11' })}>
                  {missionsData.apollo11.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'surveyor3' })}>
                  {missionsData.surveyor3.name} →
                </button>
              </div>
            </div>

            <div className="dest-summary-card">
              <span className="badge badge-mars">MARS SURFACE</span>
              <h3 className="dest-name">The Red Planet</h3>
              <p className="dest-desc">
                From Viking 1's historic 1976 landing to the marathon tracks of Opportunity and the polar ice trenches dug by Phoenix.
              </p>
              <div className="dest-mission-links">
                <button onClick={() => onNavigate({ page: 'mission', mission: 'viking1' })}>
                  {missionsData.viking1.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'pathfinder' })}>
                  {missionsData.pathfinder.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'spirit' })}>
                  {missionsData.spirit.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'opportunity' })}>
                  {missionsData.opportunity.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'phoenix' })}>
                  {missionsData.phoenix.name} →
                </button>
              </div>
            </div>

            <div className="dest-summary-card">
              <span className="badge badge-cyan">DEEP SPACE</span>
              <h3 className="dest-name">Outer Solar System & Void</h3>
              <p className="dest-desc">
                Cassini's 13-year exploration of Saturn and its deliberate sacrifice, alongside Voyager 1, the farthest human object sailing through the interstellar medium.
              </p>
              <div className="dest-mission-links">
                <button onClick={() => onNavigate({ page: 'mission', mission: 'cassini' })}>
                  {missionsData.cassini.name} →
                </button>
                <button onClick={() => onNavigate({ page: 'mission', mission: 'voyager1' })}>
                  {missionsData.voyager1.name} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
