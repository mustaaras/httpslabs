import React from 'react';

interface ProtectedEmailProps {
  email?: string;
  label?: string;
}

export function ProtectedEmail({ email = 'sales@httpslabs.com', label }: ProtectedEmailProps) {
  const displayLabel = label || email;
  return (
    <a
      href={`mailto:${email}`}
      title={label || `Send email to ${email}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'var(--text-primary)',
        textDecoration: 'none',
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
      <span>{displayLabel}</span>
    </a>
  );
}
