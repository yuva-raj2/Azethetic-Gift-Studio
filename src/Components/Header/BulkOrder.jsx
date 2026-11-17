import React from 'react';
import './BulkOrder.css';

export default function BulkOrder({ onOpenBulkModal }) {
  return (
    <section className="bulk-order-section" id="bulk-order">
      <div className="bulk-split-banner">
        {/* Left Half: Full-Bleed Bulk Gifting Showcase Image */}
        <div className="bulk-image-col">
          <img
            src="/images/Bulk-Order-Gift.png"
            alt="Aztheticlyf Bulk & Corporate Gift Hampers"
            className="bulk-feature-img"
          />
        </div>

        {/* Right Half: Pastel Editorial Copy & Enquire Now CTA */}
        <div className="bulk-content-col">
          <div className="bulk-content-inner">
            <span className="bulk-eyebrow">CORPORATE &amp; EVENT FAVORS</span>
            <h2>
              Looking for the
              <br />
              Perfect Bulk
              <br />
              Order Gift?
            </h2>
            <p>We&apos;ve got you covered</p>

            <button
              type="button"
              className="bulk-enquire-btn"
              onClick={() => onOpenBulkModal && onOpenBulkModal()}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}