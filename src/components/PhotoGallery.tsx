import React, { useState } from 'react';
import type { MissionImage } from '../types/mission';
import { Lightbox } from './Lightbox';

interface PhotoGalleryProps {
  images: MissionImage[];
  missionName: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images, missionName }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="photo-gallery-editorial">
      <div className="gallery-header-row">
        <div>
          <span className="eyebrow eyebrow-cyan">DOCUMENTARY EVIDENCE</span>
          <h2 className="gallery-section-title">NASA Photographic Record</h2>
          <p className="gallery-section-sub">
            Authentic, unretouched imagery archived by NASA during the {missionName} mission. Click any photograph to inspect in full archival resolution.
          </p>
        </div>
        <div className="gallery-count-badge">
          <span className="badge badge-cyan">{images.length} ARCHIVAL PHOTOGRAPHS</span>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="gallery-editorial-grid">
        {images.map((img, idx) => {
          // Asymmetric layout classes: 0 is featured large, others varied
          const isLead = idx === 0;
          const isWide = idx === 3;
          return (
            <article
              key={idx}
              className={`gallery-card ${isLead ? 'gallery-card-lead' : ''} ${isWide ? 'gallery-card-wide' : ''}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
              }}
              aria-label={`Enlarge NASA image: ${img.title}`}
            >
              <div className="gallery-image-frame">
                <img
                  src={`/img/${img.file}`}
                  alt={img.title}
                  className="gallery-img"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/apollo11/img1.jpg';
                  }}
                />
                <div className="gallery-hover-overlay">
                  <div className="hover-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.3-4.3"/>
                      <path d="M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                  <span className="hover-action-text">Inspect High-Res Archive</span>
                </div>
              </div>

              <div className="gallery-card-caption">
                <div className="caption-top">
                  <span className="caption-number">0{idx + 1}</span>
                  <span className="caption-center">{img.center || 'NASA'}</span>
                  <span className="caption-date">
                    {new Date(img.date).toLocaleDateString('en-US', { year: 'numeric' })}
                  </span>
                </div>
                <h4 className="caption-title">{img.title}</h4>
                <p className="caption-excerpt">
                  {img.description.length > 120 ? `${img.description.slice(0, 120)}...` : img.description}
                </p>
                <div className="caption-source-line">
                  <span>Source: {img.source}</span>
                  <span className="source-arrow">↗</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
