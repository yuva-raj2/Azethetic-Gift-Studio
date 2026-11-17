import React, { useState, useRef } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeroBanner from './Components/Hero/HeroBanner';
import BulkEnquiryModal from './Components/Modals/BulkEnquiryModal';
import CartDrawer from './Components/Modals/CartDrawer';
import CuratedGifts from './Components/Common/CuratedGifts';
import TreasuredCollections from './Components/Header/TreasuredCollections';
import BestSeller from './Components/Header/BetterSeller';
import Wedding from './Components/Header/Wedding';
import BulkOrder from './Components/Header/BulkOrder';
import InstagramFeed from './Components/Header/InstagramFeed';
import Footer from './Components/Header/Footer';
function App() {
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const giftsSectionRef = useRef(null);

  const handleCtaClick = (slide) => {
    // Filter by slide category if available, then scroll smoothly to CuratedGifts
    if (slide?.category) {
      setSelectedCategory(slide.category);
    }
    giftsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    giftsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1,
        };
        return updated;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Total item count including quantities
  const totalCartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="App">
      <div className="App-header">
        {/* 1. Header with Top Announcement Bar, Branding & Search, and Category Nav */}
        <Header
          onOpenBulkEnquiry={() => setIsBulkModalOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={totalCartCount}
          onSelectCategory={handleCategorySelect}
        />

        {/* 2. Full-Width Aesthetic Hero Banner Carousel */}
        <HeroBanner onCtaClick={handleCtaClick} />
      </div>

      {/* 3. Main Catalog & Curated Collections */}
      <main ref={giftsSectionRef}>
        {selectedCategory && (
          <div className="category-selected-toast">
            <span>
              Browsing: <strong>{selectedCategory}</strong>
            </span>
            <button
              type="button"
              aria-label="Clear category filter"
              onClick={() => setSelectedCategory(null)}
            >
              ✕
            </button>
          </div>
        )}

        <CuratedGifts
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* Modals & Drawers */}
      <BulkEnquiryModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
      <TreasuredCollections/>
      <BestSeller onAddToCart={handleAddToCart} onViewAll={handleCategorySelect} />
      <Wedding onAddToCart={handleAddToCart} onViewAll={handleCategorySelect} />
      <BulkOrder onOpenBulkModal={() => setIsBulkModalOpen(true)} />
        <InstagramFeed />
        <Footer/>
    </div>
  );
}

export default App;