'use client';

import React, { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires explicit DOM property initialization for muted & playsInline
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    // Programmatically trigger play and catch any restrictions (like Low Power Mode)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Autoplay blocked (likely Low Power Mode/Safari policy). Falling back to WebP:', error);
        setUseFallback(true);
      });
    }
  }, [mounted]);

  return (
    <div className="hero-video-container">
      {mounted && (
        <>
          {/* Native hardware-accelerated video (plays in normal battery mode) */}
          {!useFallback && (
            <video
              ref={videoRef}
              src="/hero_video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/hero-poster.jpg"
              className="hero-bg-video"
              // @ts-ignore - webkit-playsinline for legacy WebKit/iOS versions
              webkit-playsinline="true"
            />
          )}

          {/* Static poster fallback (only loaded/rendered if video autoplay is blocked) */}
          {useFallback && (
            <img
              src="/hero-poster.jpg"
              alt=""
              loading="eager"
              className="hero-bg-poster-fallback"
            />
          )}
        </>
      )}
      <div className="hero-video-overlay"></div>
    </div>
  );
}


