import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import BrandLogo from './BrandLogo';
import SearchBar from './SearchBar';
import LocationDropdown from './LocationDropdown';
import { CartIcon, UserIcon } from '../Common/Icons';

export default function Navbar({
  onOpenCart,
  onOpenAuth,
  cartCount = 0,
  onLogoClick,
  onSelectCategory,
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="main-navbar">
      <div className="navbar-inner">
        {/* Left: Brand Logo */}
        <div
          className="navbar-brand-section"
          onClick={onLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              if (onLogoClick) onLogoClick();
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <BrandLogo
            brandName="AZTHETICLYF"
            partnerName="Aesthetic Gift Studio"
          />
        </div>

        {/* Center: Search & Location Pill Buttons */}
        <div className="navbar-controls-section">
          <SearchBar onSelectCategory={onSelectCategory} />
          <LocationDropdown />
        </div>

        {/* Right: Cart & Account Icons */}
        <div className="navbar-actions-section">
          {/* Cart Icon */}
          <button
            type="button"
            className="nav-icon-btn cart-btn"
            onClick={onOpenCart}
            aria-label="View Cart"
            title="Shopping Bag"
          >
            <CartIcon size={24} color="#2d2638" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* User / Profile Icon with dropdown */}
          <div className="user-menu-wrapper" ref={userMenuRef}>
            <button
              type="button"
              className="nav-icon-btn user-btn"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              aria-label="User Account"
              title="My Account"
            >
              <UserIcon size={24} color="#2d2638" />
            </button>

            {isUserMenuOpen && (
              <div className="user-dropdown-popover">
                <div className="user-popover-header">
                  <h5>Welcome to Aztheticlyf</h5>
                  <p>Track orders, saved hampers & custom gift requests</p>
                </div>
                <div className="user-popover-actions">
                  <button
                    type="button"
                    className="auth-primary-btn"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      if (onOpenAuth) onOpenAuth('login');
                    }}
                  >
                    Sign In / Register
                  </button>
                </div>
                <hr className="user-popover-divider" />
                <ul className="user-popover-links">
                  <li>
                    <a href="#orders" onClick={() => setIsUserMenuOpen(false)}>
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a href="#custom" onClick={() => setIsUserMenuOpen(false)}>
                      Custom Hamper Studio
                    </a>
                  </li>
                  <li>
                    <a href="#wishlist" onClick={() => setIsUserMenuOpen(false)}>
                      Saved Hampers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/917871501939?text=Hello%20Aztheticlyf!%20I%20need%20help%20with%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      WhatsApp Concierge
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}