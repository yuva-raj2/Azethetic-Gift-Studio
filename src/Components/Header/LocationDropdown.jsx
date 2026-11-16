import React, { useState, useRef, useEffect } from 'react';
import './LocationDropdown.css';
import { MapPinIcon, ChevronDownIcon, SearchIcon } from '../Common/Icons';

const DEFAULT_DESTINATIONS = [
  { id: 'chennai', name: 'Chennai', state: 'Same-Day / Express', popular: true },
  { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', popular: true },
  { id: 'madurai', name: 'Madurai', state: 'Tamil Nadu', popular: true },
  { id: 'trichy', name: 'Tiruchirappalli', state: 'Tamil Nadu', popular: true },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', popular: true },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', popular: true },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', popular: true },
  { id: 'delhi', name: 'Delhi NCR', state: 'Delhi', popular: true },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', popular: false },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', popular: false },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', popular: false },
  { id: 'worldwide', name: 'Worldwide Shipping', state: 'International Courier', popular: true },
];

export default function LocationDropdown({ currentCity = 'Chennai', onSelectCity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(currentCity);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city) => {
    setSelectedCity(city.name);
    if (onSelectCity) onSelectCity(city);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredCities = DEFAULT_DESTINATIONS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="location-picker-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className={`location-pill-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <MapPinIcon size={16} color="#8a6bc9" className="location-icon" />
        <span className="location-label">{selectedCity}</span>
        <ChevronDownIcon
          size={14}
          color="#6e657a"
          className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="location-dropdown-panel">
          <div className="location-panel-header">
            <h4>Delivery Location</h4>
            <p>Pan-India & worldwide shipping available[cite: 3]</p>
          </div>

          <div className="location-search-box">
            <SearchIcon size={15} color="#8a6bc9" />
            <input
              type="text"
              placeholder="Search city, pincode or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          <div className="location-list-container">
            <div className="location-section-title">DELIVERY DESTINATIONS</div>
            <ul className="location-city-list" role="listbox">
              {filteredCities.map((city) => (
                <li
                  key={city.id}
                  role="option"
                  aria-selected={selectedCity === city.name}
                >
                  <button
                    type="button"
                    className={`city-item-btn ${
                      selectedCity === city.name ? 'selected' : ''
                    }`}
                    onClick={() => handleSelect(city)}
                  >
                    <span className="city-name">{city.name}</span>
                    <span className="city-state">{city.state}</span>
                  </button>
                </li>
              ))}

              {filteredCities.length === 0 && searchTerm.trim() && (
                <li>
                  <button
                    type="button"
                    className="city-item-btn"
                    onClick={() =>
                      handleSelect({
                        id: 'custom',
                        name: searchTerm.trim(),
                        state: 'Custom Delivery',
                      })
                    }
                  >
                    <span className="city-name">Ship to "{searchTerm.trim()}"</span>
                    <span className="city-state">Available</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}