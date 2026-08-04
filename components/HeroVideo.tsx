'use client';

import React, { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

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

    // Programmatically trigger play for WebKit inline autoplay policy
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Autoplay prevented on iOS:', error);
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
  }, [mounted]);

  if (!mounted) {
    return <div className="hero-video-overlay"></div>;
  }

  return (
    <>
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
      <div className="hero-video-overlay"></div>
    </>
  );
}


