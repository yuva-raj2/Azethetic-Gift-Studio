import React from 'react';
import './Wedding.css';

export default function Wedding({ onSelectCategory, onOpenBulkModal }) {
  const handleWeddingClick = () => {
    if (onSelectCategory) {
      onSelectCategory('Saree Hampers');
    }
  };

  return (
    <section className="wedding-gifting-section" id="wedding-gifting">
      <div className="wedding-split-banner">
        {/* Left Half: Full-Bleed Showcase Image */}
        <div className="wedding-image-col">
          <img
            src="/images/Wedding-Gifting.png"
            alt="Aztheticlyf Wedding Gifting & Trousseau Hampers"
            className="wedding-feature-img"
          />
        </div>

        {/* Right Half: Pastel Editorial Copy & CTA */}
        <div className="wedding-content-col">
          <div className="wedding-content-inner">
            <span className="wedding-eyebrow">TROUSSEAU &amp; RETURN FAVORS</span>
            <h2>Wedding Gifting</h2>
            <p>
              Celebrate their union with timeless elegance. Explore our curated
              collection of traditional saree hampers, Tara Luxe anti-tarnish
              keepsakes, and bespoke wedding return favors crafted to capture the
              magic of their special day at Aztheticlyf.
            </p>

            <div className="wedding-cta-group">
              <button
                type="button"
                className="wedding-primary-btn"
                onClick={handleWeddingClick}
              >
                Wedding Gifts
              </button>

              {onOpenBulkModal && (
                <button
                  type="button"
                  className="wedding-secondary-btn"
                  onClick={onOpenBulkModal}
                >
                  Bulk Return Favors
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}