'use client';

import React from 'react';

export function HeroVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="hero-bg-video"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
    </>
  );
}
