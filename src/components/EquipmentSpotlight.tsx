import React from 'react';
import type { MissionData } from '../types/mission';

interface EquipmentProps {
  mission: MissionData;
}

export const EquipmentSpotlight: React.FC<EquipmentProps> = ({ mission }) => {
  const { equipment, classification, statusBadge, statusDescription, destination } = mission;

  const getClassificationBadgeClass = (cls: string) => {
    switch (cls) {
      case 'Intentionally Abandoned':
        return 'badge-gold';
      case 'Operational Spacecraft':
        return 'badge-green';
      case 'Failed Equipment':
        return 'badge-mars';
      case 'Completed Mission (Controlled Disposal)':
        return 'badge-cyan';
      default:
        return 'badge-cyan';
    }
  };

  return (
    <section className="equipment-spotlight-section">
      <div className="equipment-spotlight-grid">
        {/* Left Column: Technical Dossier */}
        <div className="equipment-info-pane">
          <div className="equipment-eyebrow-row">
            <span className="eyebrow eyebrow-cyan">HARDWARE ARCHAEOLOGY</span>
            <span className={`badge ${getClassificationBadgeClass(classification)}`}>
              <span className="status-pulse"></span>
              {classification}
            </span>
          </div>

          <h2 className="equipment-name">{equipment.name}</h2>
          <p className="equipment-purpose-lead">{equipment.description}</p>

          {/* Classification & Status Callout Card */}
          <div className="equipment-status-card">
            <div className="status-card-header">
              <span className="status-badge-title">{statusBadge}</span>
              <span className="status-dest-tag">{destination}</span>
            </div>
            <p className="status-desc-text">{statusDescription}</p>
          </div>

          {/* Technical Specifications */}
          <div className="equipment-specs-grid">
            <div className="spec-card">
              <span className="spec-label">VEHICLE CLASSIFICATION</span>
              <span className="spec-value">{equipment.type}</span>
            </div>
            {equipment.mass && (
              <div className="spec-card">
                <span className="spec-label">MASS AT DESTINATION</span>
                <span className="spec-value">{equipment.mass}</span>
              </div>
            )}
            {equipment.powerSource && (
              <div className="spec-card">
                <span className="spec-label">POWER SUBSYSTEM</span>
                <span className="spec-value">{equipment.powerSource}</span>
              </div>
            )}
            {mission.coordinates && (
              <div className="spec-card">
                <span className="spec-label">COORDINATES ON SURFACE</span>
                <span className="spec-value font-mono">{mission.coordinates}</span>
              </div>
            )}
          </div>

          {/* Notable Payload Instruments */}
          {equipment.notableInstruments && equipment.notableInstruments.length > 0 && (
            <div className="payload-box">
              <span className="payload-title">PRIMARY SCIENTIFIC PAYLOAD:</span>
              <ul className="payload-list">
                {equipment.notableInstruments.map((inst, i) => (
                  <li key={i} className="payload-item">
                    <span className="payload-bullet">▹</span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Large Photo & Final Fate Statement */}
        <div className="equipment-visual-pane">
          <div className="equipment-frame">
            <img
              src={`/img/${mission.heroImage}`}
              alt={equipment.name}
              className="equipment-img"
              loading="lazy"
            />
            <div className="equipment-caption-strip">
              <span className="caption-label">PHOTOGRAPHIC RECORD:</span>
              <span className="caption-text">{equipment.name} at {mission.landingSite}</span>
            </div>
          </div>

          {/* Final Fate Editorial Box */}
          <div className="equipment-fate-box">
            <div className="fate-badge-strip">
              <span className="fate-tag">ULTIMATE FATE & CONDITION</span>
            </div>
            <p className="fate-text">{equipment.fate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
