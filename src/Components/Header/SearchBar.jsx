import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';
import { SearchIcon, CloseIcon } from '../Common/Icons';

const TRENDING_SEARCHES = [
  'Korean Stationery Sets',
  'Anti-Tarnish Jewellery',
  'Tara Luxe Hampers',
  'Traditional Saree Hampers',
  'Cute Pastel Gift Boxes',
  'Aesthetic Journals & Pens',
  'Birthday & Return Gifts',
];

export default function SearchBar({ onSearch, onSelectCategory }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const triggerSearch = (searchTerm) => {
    if (!searchTerm) return;
    if (onSearch) {
      onSearch(searchTerm);
    } else if (onSelectCategory) {
      onSelectCategory(searchTerm);
    }
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerSearch(query.trim());
  };

  const handleSelectSuggestion = (term) => {
    setQuery(term);
    triggerSearch(term);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  const filteredSuggestions = TRENDING_SEARCHES.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-wrapper" ref={containerRef}>
      <form
        onSubmit={handleSubmit}
        className={`search-pill-form ${isFocused ? 'focused' : ''}`}
      >
        <button type="submit" className="search-submit-btn" aria-label="Search">
          <SearchIcon size={16} color="#8a6bc9" />
        </button>

        <input
          type="text"
          placeholder="Search stationery, anti-tarnish, hampers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="search-input"
        />

        {query && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Clear Search"
          >
            <CloseIcon size={14} color="#6e657a" />
          </button>
        )}
      </form>

      {isFocused && (
        <div className="search-suggestions-popover">
          <div className="suggestions-section-title">TRENDING FINDS</div>
          <ul className="suggestions-list">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    className="suggestion-item-btn"
                    onClick={() => handleSelectSuggestion(item)}
                  >
                    <SearchIcon size={13} color="#9b7ede" />
                    <span>{item}</span>
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button
                  type="button"
                  className="suggestion-item-btn"
                  onClick={() => handleSelectSuggestion(query.trim())}
                >
                  <SearchIcon size={13} color="#9b7ede" />
                  <span>Search for "{query.trim()}"</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}