'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  useEffect(() => {
    const handleOpen = () => setIsContactOpen(true);
    window.addEventListener('open-contact', handleOpen);

    const params = new URLSearchParams(window.location.search);
    if (
      params.get('contact') === 'open' ||
      params.get('contact') === '1' ||
      params.get('contact') === 'true'
    ) {
      setIsContactOpen(true);
    }

    return () => {
      window.removeEventListener('open-contact', handleOpen);
    };
  }, []);

  return (
    <>
      <Header onOpenContact={handleOpenContact} />
      {children}
      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}
