import React, { useState, useRef, useCallback } from 'react';
import type { ThenVsNowData } from '../types/mission';

interface ThenNowProps {
  data: ThenVsNowData;
  missionName: string;
}

export const ThenNowComparison: React.FC<ThenNowProps> = ({ data, missionName }) => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="then-now-editorial-section">
      <div className="then-now-header">
        <div>
          <span className="eyebrow eyebrow-gold">HISTORICAL CONTINUUM</span>
          <h2 className="then-now-title">Then vs. Now</h2>
          <p className="then-now-sub">
            How the achievements of {missionName} transformed from a singular historic event into the operational foundation of modern space exploration.
          </p>
        </div>

        <div className="view-toggle-pills">
          <button
            className={`toggle-pill ${viewMode === 'slider' ? 'active' : ''}`}
            onClick={() => setViewMode('slider')}
          >
            Interactive Split View
          </button>
          <button
            className={`toggle-pill ${viewMode === 'side-by-side' ? 'active' : ''}`}
            onClick={() => setViewMode('side-by-side')}
          >
            Side-by-Side Analysis
          </button>
        </div>
      </div>

      {viewMode === 'slider' ? (
        /* Interactive Split Image Slider */
        <div className="split-slider-wrapper">
          <div
            className="split-slider-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Base Image: NOW */}
            <div className="slider-layer layer-now">
              <img
                src={`/img/${data.nowImage}`}
                alt={data.nowTitle}
                className="slider-img"
                onError={(e) => { (e.target as HTMLImageElement).src = '/img/apollo11/img4.jpg'; }}
              />
              <div className="slider-badge-overlay badge-now">
                <span className="badge-tag">NOW · {data.nowDate}</span>
                <span className="badge-sub">{data.nowTitle}</span>
              </div>
            </div>

            {/* Clipped Image: THEN */}
            <div
              className="slider-layer layer-then"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={`/img/${data.thenImage}`}
                alt={data.thenTitle}
                className="slider-img"
                onError={(e) => { (e.target as HTMLImageElement).src = '/img/apollo11/img1.jpg'; }}
              />
              <div className="slider-badge-overlay badge-then">
                <span className="badge-tag">THEN · {data.thenDate}</span>
                <span className="badge-sub">{data.thenTitle}</span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="slider-divider-line"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="slider-handle-grip" aria-label="Drag to compare then and now">
                <span>‹</span>
                <span>›</span>
              </div>
            </div>
          </div>
          <p className="slider-instruction">
            Drag the slider handle horizontally or tap across the frame to compare eras.
          </p>
        </div>
      ) : (
        /* Side by Side Detailed Comparison */
        <div className="side-by-side-grid">
          <div className="side-card side-card-then">
            <div className="side-card-img-wrap">
              <img
                src={`/img/${data.thenImage}`}
                alt={data.thenTitle}
                className="side-card-img"
                onError={(e) => { (e.target as HTMLImageElement).src = '/img/apollo11/img1.jpg'; }}
              />
              <div className="side-card-tag">THEN: {data.thenDate}</div>
            </div>
            <div className="side-card-body">
              <h3 className="side-card-title">{data.thenTitle}</h3>
              <p className="side-card-text">{data.thenText}</p>
            </div>
          </div>

          <div className="side-card side-card-now">
            <div className="side-card-img-wrap">
              <img
                src={`/img/${data.nowImage}`}
                alt={data.nowTitle}
                className="side-card-img"
                onError={(e) => { (e.target as HTMLImageElement).src = '/img/apollo11/img4.jpg'; }}
              />
              <div className="side-card-tag side-card-tag-now">NOW: {data.nowDate}</div>
            </div>
            <div className="side-card-body">
              <h3 className="side-card-title">{data.nowTitle}</h3>
              <p className="side-card-text">{data.nowText}</p>
            </div>
          </div>
        </div>
      )}

      {/* Legacy Takeaway and Successor Missions */}
      <div className="legacy-takeaway-box">
        <div className="legacy-takeaway-content">
          <span className="legacy-label">ENDURING SCIENTIFIC LEGACY</span>
          <p className="legacy-quote">"{data.legacyTakeaway}"</p>
        </div>
        <div className="successor-missions-wrap">
          <span className="successor-title">DIRECT SUCCESSOR PROGRAMS</span>
          <div className="successor-tags">
            {data.successorMissions.map((succ, i) => (
              <span key={i} className="successor-tag">{succ}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
