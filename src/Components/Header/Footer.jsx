import React from 'react';
import './Footer.css';

export default function Footer({
  onSelectCategory,
  onOpenBulkModal,
  onOpenTrackModal,
}) {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="az-footer" id="footer">
      <div className="az-footer-container">
        {/* Top Brand Emblem & Wordmark */}
        <div className="az-footer-brand-row">
          <a href="#top" className="az-footer-logo" aria-label="Aztheticlyf Home">
           <img src="/images/Logo.png" alt="Aztheticlyf Logo" className="az-logo-img" />
            <div className="az-footer-brand-text">
              <span className="az-brand-title">AZTHETICLYF</span>
              <span className="az-brand-sub">AESTHETIC GIFT STUDIO</span>
            </div>
          </a>
        </div>

        {/* Main 5-Column Grid (Contact + 3 Link Columns + Socials) */}
        <div className="az-footer-grid">
          {/* Column 1: Phone & Email with Circular Pastel Icons */}
          <div className="az-footer-contact-col">
            <a href="tel:+919876543210" className="az-contact-item">
              <span className="az-circle-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>+91-78715 01939</span>
            </a>

            <a href="mailto:hello@aztheticlyf.in" className="az-contact-item">
              <span className="az-circle-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span>hello@aztheticlyf.in</span>
            </a>
          </div>

          {/* Column 2: Studio Links */}
          <ul className="az-footer-links">
            <li>
              <button
                type="button"
                onClick={() => scrollToSection('treasured-collections')}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection('best-sellers')}
              >
                Best Sellers
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection('instagram-feed')}
              >
                Studio Journal
              </button>
            </li>
          </ul>

          {/* Column 3: Services & Gifting */}
          <ul className="az-footer-links">
            <li>
              <button
                type="button"
                onClick={() => onOpenTrackModal && onOpenTrackModal()}
              >
                Track Your Order
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenBulkModal && onOpenBulkModal()}
              >
                Corporate Gifting
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  if (onSelectCategory) onSelectCategory('Saree Hampers');
                  scrollToSection('wedding-gifting');
                }}
              >
                Wedding Gifting
              </button>
            </li>
          </ul>

          {/* Column 4: Policies */}
          <ul className="az-footer-links">
            <li>
              <a href="#terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#refund">Refund Policy</a>
            </li>
            <li>
              <a href="#shipping">Shipping Policy</a>
            </li>
          </ul>

          {/* Column 5: Follow Us On Socials */}
          <div className="az-footer-social-col">
            <span className="az-social-heading">Follow us on</span>
            <div className="az-social-icons-row">
              {/* Instagram: @aztheticlyf */}
              <a
                href="https://www.instagram.com/aztheticlyf/"
                target="_blank"
                rel="noopener noreferrer"
                className="az-circle-icon az-social-link"
                aria-label="Follow Aztheticlyf on Instagram"
                title="@aztheticlyf"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Instagram: @tara.luxe.in */}
              <a
                href="https://www.instagram.com/tara.luxe.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="az-circle-icon az-social-link"
                aria-label="Follow Tara Luxe on Instagram"
                title="@tara.luxe.in"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </a>

              {/* WhatsApp Studio Chat */}
              <a
                href="https://wa.me/917871501939"
                target="_blank"
                rel="noopener noreferrer"
                className="az-circle-icon az-social-link"
                aria-label="Chat with Aztheticlyf on WhatsApp"
                title="WhatsApp Studio"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="az-footer-bottom">
          <p>
            © {new Date().getFullYear()} Aztheticlyf | Aesthetic Gift Studio. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}