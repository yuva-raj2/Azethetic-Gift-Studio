import { useState, useRef, useEffect } from 'react';

export default function DropdownButton({ label = 'Select your Location', items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        style={{ padding: '8px 14px', cursor: 'pointer' }}
      >
        {label} {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <ul
          role="menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            margin: '4px 0 0',
            padding: '4px 0',
            listStyle: 'none',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minWidth: '150px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            zIndex: 1000,
          }}
        >
          {items.map((item, index) => (
            <li key={index} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => handleSelect(item)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}