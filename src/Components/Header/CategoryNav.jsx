import React, { useState } from 'react';
import './CategoryNav.css';
import { ChevronDownIcon } from '../Common/Icons';

const CATEGORY_ITEMS = [
  {
    name: 'Korean Stationery',
    hasDropdown: true,
    badge: 'Popular',
    subcategories: [
      'Aesthetic Journals & Notebooks',
      'Cute Gel Pens & Highlighters',
      'Washi Tapes & Sticker Sheets',
      'Desk Organizers & Pouches',
      'Complete Korean Stationery Kits',
    ],
  },
  {
    name: 'Anti-Tarnish',
    hasDropdown: true,
    subcategories: [
      'Minimalist Necklaces & Chains',
      'Anti-Tarnish Earrings & Studs',
      'Bracelets & Ring Sets',
      'Tara Luxe Signature Collection',
    ],
  },
  {
    name: 'Saree Hampers',
    hasDropdown: true,
    badge: 'Trending',
    subcategories: [
      'Saree + Bangles + Bindi Hampers',
      'Tara Mini Hamper (₹999)',
      'Tara Classic Hamper (₹1499)',
      'Tara Grand Hamper (₹1999)',
      'Bridal & Festive Saree Boxes',
    ],
  },
  {
    name: 'Aesthetic Hampers',
    hasDropdown: true,
    subcategories: [
      'Pastel Plushie & Stationery Boxes',
      'Self-Care & Dove Pamper Kits',
      'Aesthetic Mug & Candle Sets',
      'Curated Gift Boxes Under ₹999',
    ],
  },
  {
    name: 'Birthdays',
    hasDropdown: true,
    subcategories: [
      'For Her - Cute & Aesthetic',
      'For Bestie - Stationery & Trinkets',
      'Same-Day Birthday Surprises',
      'Personalized Birthday Cards & Boxes',
    ],
  },
  {
    name: 'Anniversary',
    hasDropdown: true,
    subcategories: [
      'Couple Keepsake Boxes',
      'Tara Luxe Jewellery + Saree Sets',
      'Romantic Candle & Mug Hampers',
    ],
  },
  {
    name: 'Customize Hamper',
    hasDropdown: false,
    highlight: true,
  },
  {
    name: 'Best Sellers',
    hasDropdown: false,
  },
  {
    name: 'Wholesale & Bulk',
    hasDropdown: true,
    subcategories: [
      'Return Gifts & Party Favors',
      'Reseller Starter Bundles',
      'Wedding & Baby Shower Hampers',
      'Corporate & Event Gifting',
    ],
  },
];

export default function CategoryNav({ selectedCategory = null, onSelectCategory }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="category-navbar-wrap">
      <div className="category-nav-inner">
        <ul className="category-list">
          {CATEGORY_ITEMS.map((item, index) => {
            const isSelected =
              selectedCategory &&
              selectedCategory.toLowerCase().startsWith(item.name.toLowerCase());

            return (
              <li
                key={index}
                className={`category-item ${item.highlight ? 'highlighted' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`category-link-btn ${
                    activeDropdown === index || isSelected ? 'active' : ''
                  }`}
                  onClick={() => onSelectCategory && onSelectCategory(item.name)}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="cat-nav-badge">{item.badge}</span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      size={11}
                      color={isSelected ? '#7c5cc4' : '#6e657a'}
                      className="cat-chevron"
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="category-megamenu">
                    <div className="megamenu-title">{item.name}</div>
                    <ul className="megamenu-links">
                      {item.subcategories.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={(e) => {
                              e.preventDefault();
                              if (onSelectCategory) {
                                onSelectCategory(`${item.name} - ${sub}`);
                              }
                              setActiveDropdown(null);
                            }}
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}