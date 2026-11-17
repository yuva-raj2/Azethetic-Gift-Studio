import React from 'react';
import './Header.css';
import TopBar from './TopBar';
import Navbar from './Navbar';
import CategoryNav from './CategoryNav';
export default function Header({
  onOpenBulkEnquiry,
  onOpenCart,
  onOpenAuth,
  cartCount = 0,
  selectedCategory = null,
  onSelectCategory,
}) {
  const handleLogoClick = () => {
    if (onSelectCategory) {
      onSelectCategory(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header-wrapper">
      {/* 1. Top Announcement Bar (e.g., Worldwide Shipping | Bulk & Return Gifts) */}
      <TopBar onOpenBulkEnquiry={onOpenBulkEnquiry} />

      {/* 2. Main Branding (Aztheticlyf Logo), Search & Controls Navbar */}
      <Navbar
        onOpenCart={onOpenCart}
        onOpenAuth={onOpenAuth}
        cartCount={cartCount}
        onLogoClick={handleLogoClick}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. Category Secondary Navigation Bar */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
    </header>
  );
}