import React from 'react';
import type { Route } from '../router';
import { missionsData, MISSION_ORDER } from '../data/missionsData';
import { Timeline } from '../components/Timeline';
import { PhotoGallery } from '../components/PhotoGallery';
import { ThenNowComparison } from '../components/ThenNowComparison';
import { DiscoveriesGrid } from '../components/DiscoveriesGrid';
import { EquipmentSpotlight } from '../components/EquipmentSpotlight';

interface MissionPageProps {
  missionId: string;
  onNavigate: (r: Route) => void;
}

export const MissionPage: React.FC<MissionPageProps> = ({ missionId, onNavigate }) => {
  const mission = missionsData[missionId] || missionsData.apollo11;

  // Find previous and next missions in the canonical order
  const currentIndex = MISSION_ORDER.indexOf(mission.id as typeof MISSION_ORDER[number]);
  const prevMissionId = MISSION_ORDER[(currentIndex - 1 + MISSION_ORDER.length) % MISSION_ORDER.length];
  const nextMissionId = MISSION_ORDER[(currentIndex + 1) % MISSION_ORDER.length];
  const prevMission = missionsData[prevMissionId];
  const nextMission = missionsData[nextMissionId];

  const getDestinationBadgeClass = (dest: string) => {
    switch (dest) {
      case 'Moon':
        return 'badge-gold';
      case 'Mars':
        return 'badge-mars';
      case 'Saturn':
      case 'Interstellar Space':
        return 'badge-cyan';
      default:
        return 'badge-cyan';
    }
  };

  return (
    <div className="mission-chapter-page">
      {/* ========== CINEMATIC MISSION HERO ========== */}
      <section className="mission-hero">
        <div
          className="mission-hero-backdrop"
          style={{ backgroundImage: `url(/img/${mission.heroImage})` }}
        >
          <div className="mission-hero-vignette"></div>
        </div>

        <div className="container mission-hero-content">
          <button
            className="mission-back-btn"
            onClick={() => onNavigate({ page: 'missions' })}
            aria-label="Back to all missions"
          >
            ← Back to All Missions
          </button>

          <div className="mission-hero-tags">
            <span className={`badge ${getDestinationBadgeClass(mission.destination)}`}>
              {mission.destination}
            </span>
            <span className="badge badge-gold">
              <span className="status-pulse"></span>
              {mission.classification}
            </span>
            <span className="hero-dest-site font-mono">{mission.landingSite}</span>
          </div>

          <h1 className="mission-hero-title">{mission.name}</h1>
          <p className="mission-hero-tagline">"{mission.tagline}"</p>

          <p className="mission-hero-purpose lead">
            {mission.purpose}
          </p>

          {/* Key Mission Stats Bar */}
          <div className="mission-stats-bar">
            <div className="mission-stat">
              <span className="stat-label">LAUNCH DATE</span>
              <span className="stat-val font-mono">{mission.dates.launch}</span>
            </div>
            {mission.dates.landing && (
              <div className="mission-stat">
                <span className="stat-label">SURFACE ARRIVAL</span>
                <span className="stat-val font-mono">{mission.dates.landing}</span>
              </div>
            )}
            <div className="mission-stat">
              <span className="stat-label">MISSION LIFESPAN</span>
              <span className="stat-val">{mission.duration}</span>
            </div>
            <div className="mission-stat">
              <span className="stat-label">EXPLORATION DISTANCE</span>
              <span className="stat-val">{mission.distance}</span>
            </div>
            <div className="mission-stat">
              <span className="stat-label">STATUS</span>
              <span className="stat-val status-badge-highlight">{mission.statusBadge}</span>
            </div>
          </div>

          {/* Historic Quote */}
          {mission.quote && (
            <div className="mission-quote-banner">
              <p className="quote-text">"{mission.quote.text}"</p>
              <span className="quote-author">— {mission.quote.author}</span>
            </div>
          )}
        </div>
      </section>

      {/* ========== MISSION HARDWARE & ARCHAEOLOGY ========== */}
      <div className="container">
        <EquipmentSpotlight mission={mission} />
      </div>

      {/* ========== INTERACTIVE MISSION TIMELINE ========== */}
      <section className="section timeline-outer-section">
        <div className="container">
          <Timeline events={mission.keyEvents} missionName={mission.name} />
        </div>
      </section>

      {/* ========== SCIENTIFIC DISCOVERIES ========== */}
      <section className="section discoveries-outer-section">
        <div className="container">
          <DiscoveriesGrid discoveries={mission.discoveries} missionName={mission.name} />
        </div>
      </section>

      {/* ========== NASA PHOTO GALLERY WITH LIGHTBOX ========== */}
      <section className="section gallery-outer-section">
        <div className="container">
          <PhotoGallery images={mission.images} missionName={mission.name} />
        </div>
      </section>

      {/* ========== THEN VS NOW COMPARISON ========== */}
      <section className="section then-now-outer-section">
        <div className="container">
          <ThenNowComparison data={mission.thenVsNow} missionName={mission.name} />
        </div>
      </section>

      {/* ========== EDUCATIONAL SUMMARY (Ages 9-14) ========== */}
      <section className="section educational-summary-section">
        <div className="container container-narrow">
          <div className="educational-summary-card">
            <div className="summary-header">
              <span className="eyebrow eyebrow-cyan">DISCOVERY FOR YOUNG EXPLORERS</span>
              <h3 className="summary-title">Understanding {mission.name}</h3>
            </div>
            <p className="summary-text lead">
              {mission.educationalSummary}
            </p>
          </div>
        </div>
      </section>

      {/* ========== CHAPTER CLOSING & RELATED MISSIONS ========== */}
      <section className="section mission-closing-nav-section">
        <div className="container">
          <div className="chapter-nav-grid">
            {/* Previous Mission Card */}
            <div
              className="chapter-nav-card nav-prev"
              onClick={() => onNavigate({ page: 'mission', mission: prevMission.id })}
              role="button"
              tabIndex={0}
            >
              <span className="nav-direction">← PREVIOUS CHAPTER</span>
              <h4 className="nav-target-name">{prevMission.name}</h4>
              <span className="nav-target-dest">{prevMission.destination} · {prevMission.statusBadge}</span>
            </div>

            {/* Solar System Map Jump */}
            <div
              className="chapter-nav-card nav-center"
              onClick={() => onNavigate({ page: 'explore' })}
              role="button"
              tabIndex={0}
            >
              <span className="nav-direction">CELESTIAL CARTOGRAPHY</span>
              <h4 className="nav-target-name">Solar System Map</h4>
              <span className="nav-target-dest">View all 9 nodes in interplanetary orbit</span>
            </div>

            {/* Next Mission Card */}
            <div
              className="chapter-nav-card nav-next"
              onClick={() => onNavigate({ page: 'mission', mission: nextMission.id })}
              role="button"
              tabIndex={0}
            >
              <span className="nav-direction">NEXT CHAPTER →</span>
              <h4 className="nav-target-name">{nextMission.name}</h4>
              <span className="nav-target-dest">{nextMission.destination} · {nextMission.statusBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOURCES & NASA ATTRIBUTION ========== */}
      <section className="sources-attribution-section">
        <div className="container">
          <div className="sources-box">
            <h4 className="sources-title">Archival Sources & Documentary Citations</h4>
            <p className="sources-note">
              All scientific data and documentary photographs for {mission.name} are preserved in accordance with NASA Public Access policies and derived from the NASA Image and Video Library, Jet Propulsion Laboratory (JPL-Caltech), and NASA History Division archives.
            </p>
            <div className="sources-list">
              {mission.images.map((img, i) => (
                <div key={i} className="source-citation-item">
                  <span className="citation-num">[{i + 1}]</span>
                  <span className="citation-title">{img.title}</span>
                  <span className="citation-center">Center: {img.center || 'NASA'}</span>
                  {img.sourceUrl && (
                    <a
                      href={img.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="citation-link"
                    >
                      NASA Archive Link ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
