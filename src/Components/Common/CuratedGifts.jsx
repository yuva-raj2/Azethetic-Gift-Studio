import React, { useState } from 'react';
import './CuratedGifts.css';
import { CartIcon, HeartIcon } from './Icons';

const CATEGORY_CARDS = [
  {
    id: 'birthday',
    title: 'Birthday Selection',
    filterKey: 'Birthdays',
    subtitle: 'Cute Korean stationery & pastel surprises',
    image: '/images/Birthday-Selection.png',
    badge: 'Most Loved',
  },
  {
    id: 'celebrity',
    title: 'Celebrity Hamper',
    filterKey: 'Aesthetic Hampers',
    subtitle: 'Signature luxury edits & viral aesthetic boxes',
    image: '/images/Celebrity-Hamper.png',
    badge: 'Trending',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Hamper',
    filterKey: 'Anniversary',
    subtitle: 'Tara Luxe anti-tarnish & traditional saree sets',
    image: '/images/Anniversary-Hamper.png',
    badge: 'Bestseller',
  },
  {
    id: 'personalized',
    title: 'Personalized Images',
    filterKey: 'Customize Hamper',
    subtitle: 'Custom polaroids, keepsake frames & custom boxes',
    image: '/images/Personalized-Images.png',
    badge: 'Custom Made',
  },
];

const CURATED_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Pastel Korean Stationery Dream Kit',
    category: 'Korean Stationery',
    occasion: 'Birthdays',
    price: 799,
    tag: 'Korean Stationery',
    description: 'Aesthetic spiral journal, pastel gel pens, highlighters, sticker sheets & desk pouch.',
    image: '/images/Birthday-Selection.png',
  },
  {
    id: 'prod-2',
    title: 'Tara Luxe Anti-Tarnish Gold Set',
    category: 'Anti-Tarnish',
    occasion: 'Anniversary',
    price: 1199,
    tag: 'Waterproof & Anti-Tarnish',
    description: '18k gold-plated minimal dainty chain, hoop earrings & velvet keepsake box.',
    image: '/images/Anniversary-Hamper.png',
  },
  {
    id: 'prod-3',
    title: 'Tara Classic Traditional Saree Hamper',
    category: 'Saree Hampers',
    occasion: 'Anniversary',
    price: 1499,
    tag: 'Signature Edit',
    description: 'Soft silk-blend saree paired with matching glass bangles, bindi book & gajra scrunchies.',
    image: '/images/Celebrity-Hamper.png',
  },
  {
    id: 'prod-4',
    title: 'Celebrity Pastel Pamper & Plush Box',
    category: 'Aesthetic Hampers',
    occasion: 'Birthdays',
    price: 1699,
    tag: 'Viral Favorite',
    description: 'Mini plushie, scented pastel candle, ceramic mug, scrunchies & handwritten note.',
    image: '/images/Celebrity-Hamper.png',
  },
  {
    id: 'prod-5',
    title: 'Custom Polaroid & Memory Keepsake Box',
    category: 'Customize Hamper',
    occasion: 'Birthdays',
    price: 899,
    tag: 'Personalized',
    description: '12 custom printed retro polaroids, fairy lights, mini wooden easel & chocolates.',
    image: '/images/Personalized-Images.png',
  },
  {
    id: 'prod-6',
    title: 'Tara Mini Festive Saree & Bangle Box',
    category: 'Saree Hampers',
    occasion: 'Best Sellers',
    price: 999,
    tag: 'Under ₹999',
    description: 'Curated festive saree drape with oxidized jhumkas, bangles & personalized gift tag.',
    image: '/images/Anniversary-Hamper.png',
  },
];

export default function CuratedGifts({
  selectedCategory = null,
  onSelectCategory,
  onAddToCart,
}) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Filter products flexibly across category, occasion, title, or search query
  const filteredProducts = selectedCategory
    ? CURATED_PRODUCTS.filter((item) => {
        const query = selectedCategory.toLowerCase();
        if (query === 'best sellers' || query === 'wholesale & bulk') return true;
        return (
          item.category.toLowerCase().includes(query) ||
          query.includes(item.category.toLowerCase()) ||
          item.occasion.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      })
    : CURATED_PRODUCTS;

  const displayedProducts =
    filteredProducts.length > 0 ? filteredProducts : CURATED_PRODUCTS;

  return (
    <section className="curated-gifts-section" id="curated-gifts">
      <div className="curated-container">
        {/* Section Heading */}
        <div className="curated-section-header">
          <span className="curated-eyebrow">HANDPICKED WITH LOVE</span>
          <h2>Curated Gifts</h2>
          <p>
            Explore our handpicked selection of Korean stationery, Tara Luxe anti-tarnish edits &amp; aesthetic hampers for every occasion.
          </p>
        </div>

        {/* 4 Category Showcase Cards */}
        <div className="curated-category-grid">
          {CATEGORY_CARDS.map((card) => {
            const isActive =
              selectedCategory &&
              selectedCategory.toLowerCase() === card.filterKey.toLowerCase();

            return (
              <div
                key={card.id}
                className={`curated-cat-card ${isActive ? 'active' : ''}`}
                onClick={() =>
                  onSelectCategory &&
                  onSelectCategory(isActive ? null : card.filterKey)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (onSelectCategory) {
                      onSelectCategory(isActive ? null : card.filterKey);
                    }
                  }
                }}
              >
                <div className="curated-cat-img-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="curated-cat-img"
                  />
                  <span className="curated-cat-badge">{card.badge}</span>
                </div>
                <div className="curated-cat-info">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                  <span className="curated-cat-cta">
                    {isActive ? 'Showing Collection ✓' : 'Explore Collection →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curated Hampers & Products Showcase */}
        <div className="curated-products-header">
          <div>
            <h3>
              {selectedCategory
                ? `Showing: ${selectedCategory}`
                : 'Signature Aesthetic Hampers'}
            </h3>
            {selectedCategory && filteredProducts.length === 0 && (
              <p className="filter-fallback-note">
                Showing our bestsellers matching your aesthetic vibe
              </p>
            )}
          </div>

          {selectedCategory && onSelectCategory && (
            <button
              type="button"
              className="reset-filter-btn"
              onClick={() => onSelectCategory(null)}
            >
              View All Gifts
            </button>
          )}
        </div>

        <div className="curated-products-grid">
          {displayedProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div key={product.id} className="product-boutique-card">
                <div className="product-img-box">
                  <img src={product.image} alt={product.title} />
                  <span className="product-tag-pill">{product.tag}</span>
                  <button
                    type="button"
                    className={`wishlist-heart-btn ${isWishlisted ? 'saved' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Save to Wishlist"
                  >
                    <HeartIcon
                      size={17}
                      color={isWishlisted ? '#e06d82' : '#2d2638'}
                      fill={isWishlisted ? '#e06d82' : 'none'}
                    />
                  </button>
                </div>

                <div className="product-card-body">
                  <span className="product-category-label">{product.category}</span>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>

                  <div className="product-card-footer">
                    <div className="product-price-wrap">
                      <span className="product-price">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="product-tax-note">Incl. gift wrap</span>
                    </div>

                    <button
                      type="button"
                      className="add-to-bag-btn"
                      onClick={() => onAddToCart && onAddToCart(product)}
                    >
                      <CartIcon size={15} />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}