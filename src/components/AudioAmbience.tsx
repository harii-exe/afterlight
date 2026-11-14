import React, { useState, useRef, useEffect } from 'react';

export const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Create master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Sub-bass drone (55Hz - A1)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        // Harmonic drone (110Hz - A2)
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(110.5, ctx.currentTime);

        // Subtle resonant shimmer (165Hz)
        const osc3 = ctx.createOscillator();
        osc3.type = 'triangle';
        osc3.frequency.setValueAtTime(164.8, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.value = 0.4;
        osc3.connect(oscGain);
        oscGain.connect(masterGain);

        osc1.connect(masterGain);
        osc2.connect(masterGain);

        osc1.start();
        osc2.start();
        osc3.start();

        setIsPlaying(true);
      } catch (err) {
        console.warn('Web Audio ambience could not start:', err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
        setTimeout(() => {
          ctx.close();
          audioCtxRef.current = null;
          gainNodeRef.current = null;
          setIsPlaying(false);
        }, 1500);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      className={`audio-ambience-btn ${isPlaying ? 'active' : ''}`}
      onClick={toggleSound}
      title={isPlaying ? 'Mute Deep Space Ambience' : 'Play Deep Space Ambience'}
      aria-label="Toggle deep space audio ambience"
    >
      <div className="audio-bars">
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </div>
      <span className="audio-label">{isPlaying ? 'Audio ON' : 'Sound'}</span>
    </button>
  );
};
