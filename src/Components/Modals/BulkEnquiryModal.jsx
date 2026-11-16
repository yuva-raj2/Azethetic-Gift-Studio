import React, { useState } from 'react';
import './Modals.css';
import { CloseIcon, WhatsAppIcon } from '../Common/Icons';

export default function BulkEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    enquiryType: 'Wholesale / Reselling',
    email: '',
    phone: '',
    quantity: '25-50',
    budget: '₹500 - ₹1,000',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '917871501939';
    const summaryText = [
      `Hello Aztheticlyf! I'd like to submit a *${formData.enquiryType}* enquiry:`,
      `• *Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone}`,
      formData.email ? `• *Email:* ${formData.email}` : null,
      `• *Estimated Qty:* ${formData.quantity} units/hampers`,
      `• *Budget per Unit:* ${formData.budget}`,
      formData.message ? `• *Notes:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summaryText)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseIcon size={20} color="#2d2638" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <span className="modal-badge">WHOLESALE • BULK • RETURN GIFTS</span>
              <h3>Wholesale & Custom Bulk Enquiries</h3>
              <p>
                Curated Korean stationery bundles, Tara Luxe anti-tarnish sets & custom return hampers at wholesale pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Krishnan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Enquiry Type *</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, enquiryType: e.target.value })
                    }
                  >
                    <option value="Wholesale / Reselling">Wholesale / Reselling</option>
                    <option value="Wedding / Baby Shower Return Gifts">
                      Wedding / Baby Shower Return Gifts
                    </option>
                    <option value="Birthday / Party Favors">
                      Birthday / Party Favors
                    </option>
                    <option value="Corporate / Event Gifting">
                      Corporate / Event Gifting
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Estimated Quantity</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  >
                    <option value="10-25">10 - 25 Pieces / Hampers</option>
                    <option value="25-50">25 - 50 Pieces / Hampers</option>
                    <option value="50-100">50 - 100 Pieces / Hampers</option>
                    <option value="100+">100+ Pieces (Wholesale Catalog)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Budget per Hamper / Kit</label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="Under ₹500">Under ₹500 (Return Favors)</option>
                    <option value="₹500 - ₹1,000">₹500 - ₹1,000</option>
                    <option value="₹1,000 - ₹2,000">₹1,000 - ₹2,000</option>
                    <option value="₹2,000+ (Grand Hampers)">
                      ₹2,000+ (Grand Hampers)
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Occasion & Custom Preferences</label>
                <textarea
                  rows="3"
                  placeholder="Share your event date, preferred theme (pastel, traditional saree, Korean stationery, Tara Luxe), or custom tag message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button type="submit" className="modal-submit-btn">
                <WhatsAppIcon size={16} />
                <span>SEND ENQUIRY VIA WHATSAPP</span>
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Enquiry Ready on WhatsApp!</h3>
            <p>
              Thank you for reaching out to Aztheticlyf. Our studio team will share our wholesale catalogue and custom quote shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}