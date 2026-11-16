import React from 'react';
import './TopBar.css';
import { WhatsAppIcon } from '../Common/Icons';

export default function TopBar({ onOpenBulkEnquiry }) {
  const displayPhone = '+91 78715 01939';
  const whatsappNumber = '917871501939';
  const whatsappMessage = encodeURIComponent(
    'Hello Aztheticlyf! I have an inquiry regarding curated gifts & hampers.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="top-announcement-bar">
      <div className="top-bar-inner">
        {/* Left highlight: Shipping */}
        <div className="top-bar-badge">
          <span>WORLDWIDE SHIPPING</span>
        </div>

        {/* Centered Phone / WhatsApp Announcement */}
        <div className="top-bar-content">
          <span className="announcement-text">
            FOR QUERIES CALL OR WHATSAPP:{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="phone-link"
              title="Chat with Aztheticlyf on WhatsApp"
            >
              <WhatsAppIcon className="topbar-wa-icon" />
              <strong>{displayPhone}</strong>
            </a>
          </span>
        </div>

        {/* Wholesale / Bulk / Return Gifts Enquiry Button */}
        <div className="top-bar-action">
          <button
            type="button"
            className="bulk-enquiry-btn"
            onClick={onOpenBulkEnquiry}
          >
            Wholesale / Bulk Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}