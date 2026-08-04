'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <>
      <Header onOpenContact={handleOpenContact} />
      {children}
      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}
