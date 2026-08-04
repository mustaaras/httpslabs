'use client';

import React, { useEffect, useRef } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires explicit DOM property initialization for muted & playsInline
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    // Programmatically trigger play for WebKit inline autoplay policy
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if Low Power Mode or iOS policy restricts autoplay
        });
      }
    };

    attemptPlay();

    // Re-attempt playback on first user interaction if blocked by Low Power Mode
    const handleTouchOrScroll = () => {
      if (video.paused) {
        attemptPlay();
      }
      window.removeEventListener('touchstart', handleTouchOrScroll);
      window.removeEventListener('scroll', handleTouchOrScroll);
    };

    window.addEventListener('touchstart', handleTouchOrScroll, { passive: true });
    window.addEventListener('scroll', handleTouchOrScroll, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchOrScroll);
      window.removeEventListener('scroll', handleTouchOrScroll);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="hero-bg-video"
        // @ts-ignore - webkit-playsinline for legacy WebKit/iOS versions
        webkit-playsinline="true"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
    </>
  );
}

