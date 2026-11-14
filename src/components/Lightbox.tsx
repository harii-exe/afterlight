import React, { useEffect, useCallback } from 'react';
import type { MissionImage } from '../types/mission';

interface LightboxProps {
  images: MissionImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images.length) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-shell" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="lightbox-topbar">
          <div className="lightbox-counter">
            <span className="badge badge-gold">
              NASA ARCHIVAL IMAGE {currentIndex + 1} OF {images.length}
            </span>
            {currentImg.center && (
              <span className="lightbox-center-badge">Center: {currentImg.center}</span>
            )}
          </div>
          <button
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Lightbox"
          >
            ✕
          </button>
        </div>

        {/* Main Stage with Image and Navigation Arrows */}
        <div className="lightbox-stage">
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="lightbox-image-wrap">
            <img
              src={`/img/${currentImg.file}`}
              alt={currentImg.title}
              className="lightbox-main-img"
              onError={(e) => {
                // Fallback in case of image load failure
                (e.target as HTMLImageElement).src = '/img/apollo11/img1.jpg';
              }}
            />
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={onNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Detailed Caption & Source Footer */}
        <div className="lightbox-footer">
          <div className="lightbox-caption-block">
            <h4 className="lightbox-title">{currentImg.title}</h4>
            <p className="lightbox-desc">{currentImg.description}</p>
          </div>

          <div className="lightbox-meta-block">
            <div className="lightbox-credit-row">
              <span className="credit-label">Source:</span>
              <span className="credit-val">{currentImg.source || 'NASA Image and Video Library'}</span>
            </div>
            <div className="lightbox-credit-row">
              <span className="credit-label">Archived Date:</span>
              <span className="credit-val">{new Date(currentImg.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            {currentImg.sourceUrl && (
              <a
                href={currentImg.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-source-link"
              >
                View on NASA Archives ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
