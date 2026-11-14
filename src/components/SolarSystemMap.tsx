import React, { useState } from 'react';
import type { Route } from '../router';
import { missionsData, type MissionId } from '../data/missionsData';
import { SolarSystem3D } from './SolarSystem3D';

interface SolarSystemMapProps {
  onNavigate: (r: Route) => void;
  initialSelectedId?: string;
}

interface CelestialMarker {
  id: MissionId;
  name: string;
  destination: string;
  group: 'moon' | 'mars' | 'deep-space';
  cx: number;
  cy: number;
  orbitRadius: number;
  color: string;
}

const MARKERS: CelestialMarker[] = [
  // Moon System (Earth distance ~220)
  { id: 'apollo11', name: 'Apollo 11', destination: 'Moon', group: 'moon', cx: 270, cy: 190, orbitRadius: 240, color: '#F59E0B' },
  { id: 'surveyor3', name: 'Surveyor 3', destination: 'Moon', group: 'moon', cx: 290, cy: 230, orbitRadius: 240, color: '#FCD34D' },

  // Mars Orbit (distance ~380)
  { id: 'viking1', name: 'Viking 1', destination: 'Mars', group: 'mars', cx: 480, cy: 260, orbitRadius: 390, color: '#FB7185' },
  { id: 'pathfinder', name: 'Pathfinder', destination: 'Mars', group: 'mars', cx: 520, cy: 300, orbitRadius: 390, color: '#F43F5E' },
  { id: 'spirit', name: 'Spirit', destination: 'Mars', group: 'mars', cx: 490, cy: 350, orbitRadius: 390, color: '#E11D48' },
  { id: 'opportunity', name: 'Opportunity', destination: 'Mars', group: 'mars', cx: 440, cy: 390, orbitRadius: 390, color: '#FDA4AF' },
  { id: 'phoenix', name: 'Phoenix', destination: 'Mars', group: 'mars', cx: 380, cy: 420, orbitRadius: 390, color: '#F472B6' },

  // Saturn & Deep Space (distance ~600 to 760)
  { id: 'cassini', name: 'Cassini', destination: 'Saturn', group: 'deep-space', cx: 680, cy: 200, orbitRadius: 570, color: '#FBBF24' },
  { id: 'voyager1', name: 'Voyager 1', destination: 'Interstellar Space', group: 'deep-space', cx: 830, cy: 120, orbitRadius: 760, color: '#38BDF8' },
];

export const SolarSystemMap: React.FC<SolarSystemMapProps> = ({ onNavigate, initialSelectedId = 'apollo11' }) => {
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [selectedId, setSelectedId] = useState<MissionId>((initialSelectedId as MissionId) || 'apollo11');
  const [activeFilter, setActiveFilter] = useState<'all' | 'moon' | 'mars' | 'deep-space'>('all');

  const selectedMission = missionsData[selectedId] || missionsData.apollo11;

  // Render 3D Cosmos as default interactive experience
  if (viewMode === '3d') {
    return (
      <SolarSystem3D
        onNavigate={onNavigate}
        initialSelectedId={initialSelectedId}
        onToggleView={() => setViewMode('2d')}
      />
    );
  }

  const filteredMarkers = MARKERS.filter(m => {
    if (activeFilter === 'all') return true;
    return m.group === activeFilter;
  });

  return (
    <div className="solar-system-wrapper">
      {/* Header and Controls */}
      <div className="map-controls-row">
        <div className="map-title-block">
          <span className="eyebrow eyebrow-cyan">CARTOGRAPHY OF EXPLORATION</span>
          <h2 className="map-heading">Interactive Solar System</h2>
          <p className="map-subhead">
            Select any planetary destination or mission node to inspect humanity's hardware outposts.
          </p>
        </div>

        {/* Filter & View Mode Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="destination-filter-tabs">
            <button
              className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Probes (9)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'moon' ? 'active' : ''}`}
              onClick={() => setActiveFilter('moon')}
            >
              The Moon (2)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'mars' ? 'active' : ''}`}
              onClick={() => setActiveFilter('mars')}
            >
              Mars (5)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'deep-space' ? 'active' : ''}`}
              onClick={() => setActiveFilter('deep-space')}
            >
              Outer Void (2)
            </button>
          </div>

          <div className="destination-filter-tabs" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
            <button className="tab-btn" onClick={() => setViewMode('3d')}>
              🌐 3D Cosmos
            </button>
            <button className="tab-btn active" style={{ color: 'var(--accent-gold)' }}>
              🗺️ 2D Map
            </button>
          </div>
        </div>
      </div>

      <div className="map-stage-container">
        {/* SVG Orbital Canvas */}
        <div className="map-canvas-box">
          <svg
            viewBox="0 0 950 540"
            className="solar-svg-map"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Sun radial glow */}
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
                <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#D97706" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Marker pulse filters */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background grid stars */}
            <g opacity="0.15">
              <line x1="50" y1="0" x2="50" y2="540" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="250" y1="0" x2="250" y2="540" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="450" y1="0" x2="450" y2="540" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="650" y1="0" x2="650" y2="540" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="850" y1="0" x2="850" y2="540" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="0" y1="270" x2="950" y2="270" stroke="#FFF" strokeWidth="0.5" strokeDasharray="3 3"/>
            </g>

            {/* Sun */}
            <g className="celestial-sun">
              <circle cx="80" cy="270" r="45" fill="url(#sunGlow)" />
              <circle cx="80" cy="270" r="16" fill="#FDE68A" />
              <text x="80" y="308" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontFamily="var(--font-tech)">SUN</text>
            </g>

            {/* Orbit: Earth-Moon System */}
            <ellipse
              cx="80"
              cy="270"
              rx="200"
              ry="160"
              fill="none"
              stroke="rgba(56, 189, 248, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            {/* Earth Body */}
            <g transform="translate(260, 215)">
              <circle cx="0" cy="0" r="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="0" y="22" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="var(--font-tech)">Earth</text>
              {/* Lunar orbit around Earth */}
              <circle cx="0" cy="0" r="24" fill="none" stroke="rgba(245, 158, 11, 0.3)" strokeDasharray="2 3" strokeWidth="1" />
              <circle cx="18" cy="-14" r="4" fill="#E2E8F0" />
              <text x="32" y="-12" fill="#E2E8F0" fontSize="9" fontFamily="var(--font-tech)">Moon</text>
            </g>

            {/* Orbit: Mars */}
            <ellipse
              cx="80"
              cy="270"
              rx="400"
              ry="240"
              fill="none"
              stroke="rgba(251, 113, 133, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            {/* Mars Body */}
            <g transform="translate(470, 320)">
              <circle cx="0" cy="0" r="13" fill="#E11D48" stroke="#FB7185" strokeWidth="1.5" />
              <text x="0" y="26" textAnchor="middle" fill="#FDA4AF" fontSize="10" fontFamily="var(--font-tech)">Mars</text>
            </g>

            {/* Orbit: Saturn */}
            <ellipse
              cx="80"
              cy="270"
              rx="610"
              ry="320"
              fill="none"
              stroke="rgba(251, 191, 36, 0.2)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            {/* Saturn Body with Rings */}
            <g transform="translate(680, 200)">
              <ellipse cx="0" cy="0" rx="28" ry="8" fill="none" stroke="rgba(245, 158, 11, 0.5)" strokeWidth="3" transform="rotate(-18)" />
              <circle cx="0" cy="0" r="14" fill="#D97706" stroke="#FDE68A" strokeWidth="1.5" />
              <text x="0" y="28" textAnchor="middle" fill="#FDE68A" fontSize="10" fontFamily="var(--font-tech)">Saturn</text>
            </g>

            {/* Interstellar Trajectory Vector */}
            <g>
              <path
                d="M 80 270 Q 400 150 840 115"
                fill="none"
                stroke="rgba(56, 189, 248, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <text x="830" y="90" fill="#38BDF8" fontSize="10" fontFamily="var(--font-tech)" letterSpacing="0.1em">
                HELIOPAUSE / INTERSTELLAR VOID →
              </text>
            </g>

            {/* Selectable Mission Markers */}
            {filteredMarkers.map((marker) => {
              const isSelected = marker.id === selectedId;
              return (
                <g
                  key={marker.id}
                  className={`map-node ${isSelected ? 'selected' : ''}`}
                  transform={`translate(${marker.cx}, ${marker.cy})`}
                  onClick={() => setSelectedId(marker.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Selection reticle diamond */}
                  {isSelected && (
                    <polygon
                      points="0,-18 18,0 0,18 -18,0"
                      fill="none"
                      stroke={marker.color}
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                  )}

                  {/* Spacecraft Probe Icon (Solar panels + Avionics Core + Antenna) */}
                  <rect x="-14" y="-2.5" width="28" height="5" rx="1" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="0.8" />
                  <line x1="-7" y1="-2.5" x2="-7" y2="2.5" stroke="#38bdf8" strokeWidth="0.6" />
                  <line x1="7" y1="-2.5" x2="7" y2="2.5" stroke="#38bdf8" strokeWidth="0.6" />
                  <polygon points="0,-6 6,0 0,6 -6,0" fill={marker.color} stroke="#FFFFFF" strokeWidth="1.2" />
                  <line x1="0" y1="-6" x2="0" y2="-10" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="0" cy="-10" r="1.6" fill="#FFFFFF" />

                  {/* Node label */}
                  <rect
                    x="-40"
                    y={marker.cy > 270 ? 12 : -26}
                    width="80"
                    height="18"
                    rx="3"
                    fill="rgba(7, 11, 20, 0.85)"
                    stroke={isSelected ? marker.color : 'rgba(255, 255, 255, 0.15)'}
                    strokeWidth="0.8"
                  />
                  <text
                    x="0"
                    y={marker.cy > 270 ? 25 : -13}
                    textAnchor="middle"
                    fill={isSelected ? '#FFF' : '#CBD5E1'}
                    fontSize="9.5"
                    fontFamily="var(--font-tech)"
                    fontWeight={isSelected ? '600' : '400'}
                  >
                    {marker.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Mission Preview Dossier Card */}
        <aside className="mission-dossier-panel">
          <div className="dossier-header-strip">
            <span className="dossier-label">MISSION DOSSIER</span>
            <span className="badge badge-cyan">{selectedMission.destination}</span>
          </div>

          <div className="dossier-image-box">
            <img
              src={`/img/${selectedMission.heroImage}`}
              alt={selectedMission.name}
              className="dossier-img"
              loading="lazy"
            />
            <div className="dossier-img-overlay">
              <span className="badge badge-gold">{selectedMission.classification}</span>
            </div>
          </div>

          <div className="dossier-body">
            <div className="dossier-title-row">
              <h3 className="dossier-title">{selectedMission.name}</h3>
              <span className="dossier-status-pill">{selectedMission.statusBadge}</span>
            </div>

            <p className="dossier-quote">
              "{selectedMission.tagline}"
            </p>

            <div className="dossier-meta-list">
              <div className="dossier-meta-item">
                <span className="meta-key">Hardware:</span>
                <span className="meta-val">{selectedMission.equipment.name}</span>
              </div>
              <div className="dossier-meta-item">
                <span className="meta-key">Site:</span>
                <span className="meta-val">{selectedMission.landingSite}</span>
              </div>
              <div className="dossier-meta-item">
                <span className="meta-key">Launched:</span>
                <span className="meta-val">{selectedMission.dates.launch}</span>
              </div>
              <div className="dossier-meta-item">
                <span className="meta-key">Status Fate:</span>
                <span className="meta-val">{selectedMission.equipment.fate.slice(0, 95)}...</span>
              </div>
            </div>

            <p className="dossier-summary">
              {selectedMission.educationalSummary.slice(0, 140)}...
            </p>

            <button
              className="btn btn-primary btn-block dossier-action-btn"
              onClick={() => onNavigate({ page: 'mission', mission: selectedMission.id })}
            >
              Open Full Mission Story →
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
