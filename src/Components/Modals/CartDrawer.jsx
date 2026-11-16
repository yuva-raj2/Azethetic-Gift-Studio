import React from 'react';
import './Modals.css';
import { CloseIcon, CartIcon, WhatsAppIcon } from '../Common/Icons';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const totalCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const subtotal = cartItems.reduce((sum, item) => {
    const numericPrice =
      typeof item.price === 'number'
        ? item.price
        : parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
    return sum + numericPrice * (item.quantity || 1);
  }, 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const whatsappNumber = '917871501939';
    const itemsList = cartItems
      .map((item, idx) => {
        const qty = item.quantity || 1;
        return `${idx + 1}. *${item.title}* (Qty: ${qty}) — ₹${item.price}`;
      })
      .join('\n');

    const orderMessage = [
      'Hello Aztheticlyf! I would like to place an order for:',
      '',
      itemsList,
      '',
      `*Estimated Subtotal:* ₹${subtotal.toLocaleString('en-IN')}`,
      'Please share availability & payment details (GPay / UPI / Card).',
    ].join('\n');

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div className="cart-title-wrap">
            <CartIcon size={20} color="#7c5cc4" />
            <h4>Your Hamper Bag</h4>
            <span className="cart-count-pill">{totalCount}</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close Hamper Bag"
          >
            <CloseIcon size={20} color="#2d2638" />
          </button>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-cart-icon">🎀</div>
              <h5>Your Hamper Bag is Empty</h5>
              <p>
                Explore our Korean stationery, Tara Luxe anti-tarnish edits & curated gift boxes.
              </p>
              <button
                type="button"
                className="cart-shop-now-btn"
                onClick={onClose}
              >
                EXPLORE AESTHETIC GIFTS
              </button>
            </div>
          ) : (
            <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="cart-item-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    backgroundColor: '#fdfbff',
                    border: '1px solid rgba(155, 126, 222, 0.2)',
                  }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div className="item-details" style={{ flex: 1, minWidth: 0 }}>
                    <h6
                      style={{
                        margin: '0 0 4px 0',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#2d2638',
                      }}
                    >
                      {item.title}
                    </h6>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#7c5cc4',
                      }}
                    >
                      ₹{item.price}
                      {(item.quantity || 1) > 1 && ` × ${item.quantity}`}
                    </span>
                  </div>

                  {onRemoveItem && item.id !== undefined && (
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.title}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#6e657a',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '4px',
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <strong>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>
          </div>
          <button
            type="button"
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={handleWhatsAppCheckout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <WhatsAppIcon size={16} />
            <span>ORDER VIA WHATSAPP</span>
          </button>
        </div>
      </div>
    </div>
  );
}