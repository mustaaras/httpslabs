'use client';

import React from 'react';

interface ProtectedEmailProps {
  label?: string;
}

export function ProtectedEmail({ label }: ProtectedEmailProps) {
  const handleClick = () => {
    const user = atob('YWRtaW4=');
    const domain = atob('aHR0cHNsYWJzLmNvbQ==');
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <div
      onClick={handleClick}
      title={label || "Click to send email"}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '1rem',
      }}
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      {label ? (
        <span>{label}</span>
      ) : (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img
            src="/email_admin_dark.png"
            alt="admin"
            className="logo-dark-theme"
            style={{ height: '16px', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
          />
          <img
            src="/email_admin_light.png"
            alt="admin"
            className="logo-light-theme"
            style={{ height: '16px', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
          />
          <span style={{ marginLeft: '1px' }}>@httpslabs.com</span>
        </span>
      )}
    </div>
  );
}
