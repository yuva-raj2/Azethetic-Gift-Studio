import React, { useState } from 'react';
import './BestSeller.css';
import { CartIcon } from '../Common/Icons';

const BEST_SELLER_TABS = [
  { id: 'exclusive', label: 'Exclusive Collection' },
  { id: 'personalised', label: 'Personalised Gifts' },
  { id: 'couple', label: 'Couple Favourites' },
];

const BEST_SELLER_PRODUCTS = {
  exclusive: [
    {
      id: 'bs-exc-1',
      title: 'The Tara Luxe Signature Trunk',
      price: 1999,
      rating: 5,
      reviews: 18,
      soldOut: false,
      image: '/images/For-Her.png',
      hoverNote: 'Includes: Silk-blend saree, Tara Luxe anti-tarnish chain, glass bangles, Korean journal & scented candle.',
    },
    {
      id: 'bs-exc-2',
      title: 'Pastel Korean Stationery Vault',
      price: 1199,
      rating: 5,
      reviews: 24,
      soldOut: false,
      image: '/images/Birthday-Selection.png',
      hoverNote: 'Includes: Floral hardcover journal, 6 pastel gel pens, aesthetic stickers, washi tapes & desk pouch.',
    },
    {
      id: 'bs-exc-3',
      title: 'Royal Saree & Jhumka Trousseau',
      price: 1799,
      rating: 4.5,
      reviews: 9,
      soldOut: true,
      image: '/images/Celebrity-Hamper.png',
      hoverNote: 'Includes: Festive pastel saree, oxidized jhumkas, satin scrunchies, bindi book & handwritten note.',
    },
    {
      id: 'bs-exc-4',
      title: 'Blush Self-Care & Plushie Crate',
      price: 1499,
      rating: 5,
      reviews: 16,
      soldOut: false,
      image: '/images/Anniversary-Hamper.png',
      hoverNote: 'Includes: Mini plush teddy, rose jar candle, ceramic mug, satin sleep mask & body care treats.',
    },
  ],
  personalised: [
    {
      id: 'bs-per-1',
      title: 'Custom Polaroid & Memory Box',
      price: 899,
      rating: 5,
      reviews: 31,
      soldOut: false,
      image: '/images/Personalized-Images.png',
      hoverNote: 'Includes: 12 custom retro polaroids, warm fairy lights, mini wooden easel & keepsake box.',
    },
    {
      id: 'bs-per-2',
      title: 'Personalised Wooden Jenga Edition',
      price: 1099,
      rating: 5,
      reviews: 14,
      soldOut: false,
      image: '/images/Personalized-Images.png',
      hoverNote: 'Includes: Custom engraved wooden tower blocks, keepsake pine box & personalized message card.',
    },
    {
      id: 'bs-per-3',
      title: 'Engraved Name & Initial Desk Kit',
      price: 1299,
      rating: 4.5,
      reviews: 11,
      soldOut: false,
      image: '/images/For-Him.png',
      hoverNote: 'Includes: Monogrammed notebook, metallic pen set, engraved wooden card & insulated tumbler.',
    },
    {
      id: 'bs-per-4',
      title: 'Mom & Dad Custom Keepsake Hamper',
      price: 1649,
      rating: 5,
      reviews: 19,
      soldOut: false,
      image: '/images/Parents.png',
      hoverNote: 'Includes: Matching Mom & Dad ceramic mugs, custom photo frame, dry fruit jars & wooden plaque.',
    },
  ],
  couple: [
    {
      id: 'bs-cpl-1',
      title: 'The Luxe Love Affair Hamper',
      price: 1899,
      rating: 5,
      reviews: 22,
      soldOut: false,
      image: '/images/Anniversary-Hamper.png',
      hoverNote: 'Includes: Couple mugs, scented rose candle, mini plush bear, photo frame & gourmet treats.',
    },
    {
      id: 'bs-cpl-2',
      title: 'Heartfelt Promises Keepsake Box',
      price: 1549,
      rating: 5,
      reviews: 15,
      soldOut: false,
      image: '/images/For-Her.png',
      hoverNote: 'Includes: Custom couple polaroids, Tara Luxe bracelet, handwritten love note & chocolates.',
    },
    {
      id: 'bs-cpl-3',
      title: 'His & Hers Aesthetic Date Night Box',
      price: 1749,
      rating: 4.5,
      reviews: 8,
      soldOut: true,
      image: '/images/For-Him.png',
      hoverNote: 'Includes: Conversation card deck, cedarwood & rose candles, ceramic mugs & sweet treats.',
    },
    {
      id: 'bs-cpl-4',
      title: 'You & Me Forever Memory Crate',
      price: 1999,
      rating: 5,
      reviews: 27,
      soldOut: false,
      image: '/images/Celebrity-Hamper.png',
      hoverNote: 'Includes: Wooden keepsake cutout, fairy lights, custom photo frame, scented jar & gift bag.',
    },
  ],
};

function StarRating({ rating, reviews }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="bs-rating-row" aria-label={`Rated ${rating} out of 5 stars`}>
      <span className="bs-stars">
        {'★'.repeat(fullStars)}
        {hasHalf ? '½' : ''}
        {'☆'.repeat(5 - Math.ceil(rating))}
      </span>
      <span className="bs-review-count">({reviews})</span>
    </div>
  );
}

export default function BestSeller({ onAddToCart, onViewAll }) {
  const [activeTab, setActiveTab] = useState('exclusive');

  const products = BEST_SELLER_PRODUCTS[activeTab] || [];

  return (
    <section className="bestseller-section" id="best-sellers">
      <div className="bestseller-container">
        {/* Centered Title & Subtitle */}
        <div className="bestseller-header">
          <h2>Best Seller</h2>
          <p>Discover timeless treasures that captivate hearts and delight senses</p>
        </div>

        {/* Underlined Tab Bar */}
        <div className="bestseller-tabs-bar" role="tablist" aria-label="Best Seller Collections">
          {BEST_SELLER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`bestseller-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4-Column Product Grid */}
        <div className="bestseller-grid">
          {products.map((item) => (
            <article key={item.id} className="bestseller-card">
              <div className="bestseller-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="bestseller-img"
                />

                {item.soldOut && (
                  <span className="bestseller-soldout-badge">Sold out</span>
                )}

                {/* Hover Box Contents Overlay (inspired by reference card 1) */}
                {item.hoverNote && (
                  <div className="bestseller-hover-card">
                    <p>{item.hoverNote}</p>
                    {!item.soldOut && onAddToCart && (
                      <button
                        type="button"
                        className="bestseller-quick-add"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(item);
                        }}
                      >
                        <CartIcon size={14} />
                        <span>Add to Bag</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="bestseller-info">
                <h3 className="bestseller-title" title={item.title}>
                  {item.title}
                </h3>
                <StarRating rating={item.rating} reviews={item.reviews} />
                <div className="bestseller-price">
                  ₹{item.price.toLocaleString('en-IN')}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered View All Pill CTA */}
        <div className="bestseller-footer">
          <button
            type="button"
            className="bestseller-view-all-btn"
            onClick={() => onViewAll && onViewAll('Best Sellers')}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}