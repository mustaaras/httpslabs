'use client';

import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('_gotcha')) {
      form.reset();
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-primary)' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Corporate Inquiry Transmitted
        </div>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
          Thank you for reaching out to httpsLabs LLC. Our office will review your inquiry and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New Inquiry - httpsLabs Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {/* Honeypot field */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-name">
          Full Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          className="form-input"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-email">
          Work Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className="form-input"
          placeholder="john@company.com"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-category">
          Inquiry Category
        </label>
        <select
          id="contact-category"
          name="category"
          className="form-input"
          style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}
          required
        >
          <option value="Domain Brokerage & Acquisition">Domain Brokerage &amp; Acquisition</option>
          <option value="Full-Stack SaaS Engineering">Full-Stack SaaS Engineering</option>
          <option value="Brand Strategy & Identity">Brand Strategy &amp; Identity</option>
          <option value="Global Business Entity Setup">Global Business Entity Setup</option>
          <option value="General Corporate Inquiry">General Corporate Inquiry</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">
          Project or Inquiry Details
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          rows={5}
          placeholder="How can httpsLabs assist your organization?"
          required
        ></textarea>
      </div>

      {status === 'error' && (
        <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem' }}>
          An error occurred submitting your inquiry. Please try again or call +1 (610) 557-9277.
        </div>
      )}

      <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Transmitting Inquiry...' : 'Submit Corporate Inquiry'}
      </button>
    </form>
  );
}
