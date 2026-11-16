import React from 'react';

export default function BrandLogo({
  brandName = 'AZTHETICLYF',
  partnerName = 'Aesthetic Gift Studio',
  logoSrc = null, // Optional: pass imported logo image path here
}) {
  return (
    <div
      className="brand-logo-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Circular Pastel Emblem Icon (or Generated Image if logoSrc is passed) */}
      <div
        className="brand-emblem"
        style={{
          position: 'relative',
          width: '44px',
          height: '44px',
          flexShrink: 0,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="./images/Logo.png" alt="Brand Emblem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

      {/* Brand Title & Studio Subtitle */}
      <div
        className="brand-title-wrap"
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '2.2px',
            color: '#2d2638',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {brandName}
        </span>

        {partnerName && (
          <>
            <span
              style={{
                color: '#d4c4f0',
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: 1,
              }}
            >
              |
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '13.5px',
                fontWeight: 600,
                fontStyle: 'italic',
                color: '#8a6bc9',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
              }}
            >
              {partnerName}
            </span>
          </>
        )}
      </div>
    </div>
  );
}