import React from 'react';
import './TreasuredCollections.css';

const TREASURED_COLLECTIONS = [
  {
    id: 1,
    title: 'For Her',
    subtitle: 'Tara Luxe anti-tarnish jewellery, pastel saree hampers & Korean stationery',
    badge: 'Her Edit',
    filterKey: 'Aesthetic Hampers',
    image: '/images/For-Her.png',
  },
  {
    id: 2,
    title: 'For Him',
    subtitle: 'Minimalist accessories, sleek desk stationery & custom wooden keepsakes',
    badge: 'His Edit',
    filterKey: 'Aesthetic Hampers',
    image: '/images/For-Him.png',
  },
  {
    id: 3,
    title: 'Corporate Collections',
    subtitle: 'Executive desk hampers, custom brand keepsakes & gourmet client boxes',
    badge: 'Corporate Edit',
    filterKey: 'Wholesale & Bulk',
    image: '/images/Corporate-Collections.png',
  },
  {
    id: 4,
    title: 'Kids and Babies',
    subtitle: 'Soft pastel plushies, baby keepsake boxes, cute Korean stationery & party favors',
    badge: 'Little Ones',
    filterKey: 'Korean Stationery',
    image: '/images/Kids-and-Babies.png',
  },
  {
    id: 5,
    title: 'Parents',
    subtitle: 'Matching Mom & Dad ceramic mugs, traditional saree hampers, wellness essentials & keepsake frames',
    badge: 'Parents Edit',
    filterKey: 'Saree Hampers',
    image: '/images/Parents.png',
  },
];

function TreasuredCollections({ onSelectCategory }) {
  const handleCardClick = (card) => {
    if (onSelectCategory) {
      onSelectCategory(card.filterKey || card.title);
    }
  };

  return (
    <section className="treasured-collections-section" id="treasured-collections">
      <div className="treasured-container">
        <div className="treasured-header">
          <span className="treasured-eyebrow">CURATED WITH AFFECTION</span>
          <h2>Treasured Collections</h2>
          <p>Thoughtful gifts crafted for the special people in your life</p>
        </div>

        <div className="image-cards-container">
          {TREASURED_COLLECTIONS.map((card) => (
            <div
              key={card.id}
              className="image-cards"
              onClick={() => handleCardClick(card)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(card);
                }
              }}
            >
              <div className="treasured-img-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="image-picuture-variance"
                />
                <span className="treasured-card-badge">{card.badge}</span>
              </div>

              <div className="treasured-card-overlay">
                <div className="treasured-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                  <span className="treasured-explore-pill">
                    Explore {card.title} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreasuredCollections;