'use client';

import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('_honey')) {
      form.reset();
      onClose();
      setStatus('idle');
      return;
    }

    try {
      const recipient = atob('YWRtaW5AaHR0cHNsYWJzLmNvbQ==');
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={`modal-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2 id="modal-title" className="modal-title">
              Corporate Inquiry
            </h2>
            <p className="modal-subtitle">
              Direct communication line to httpsLabs Office.
            </p>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {status === 'success' ? (
          <div
            style={{
              padding: '1.5rem 0',
              textAlign: 'center',
              color: 'var(--text-primary)',
            }}
          >
            <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Inquiry Transmitted
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New Corporate Inquiry - httpsLabs"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Honeypot field */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-name">
                Full Name
              </label>
              <input
                type="text"
                id="inquiry-name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-email">
                Work Email
              </label>
              <input
                type="email"
                id="inquiry-email"
                name="email"
                className="form-input"
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-message">
                Project or Inquiry Details
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                className="form-textarea"
                placeholder="How can httpsLabs assist your organization?"
                required
              ></textarea>
            </div>

            {status === 'error' && (
              <div
                style={{
                  color: '#ef4444',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                }}
              >
                An error occurred sending your message. Please try again or call +1 (929) 273-4008.
              </div>
            )}

            <button
              type="submit"
              className="btn-submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting'
                ? 'Transmitting...'
                : 'Submit Corporate Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
