import React from 'react'
import DropdownButton from './Dropdown';

function SearchPage() {
  const menuItems = [
    { label: 'Edit Profile', onClick: () => console.log('Edit clicked') },
    { label: 'Settings', onClick: () => console.log('Settings clicked') },
    { label: 'Log Out', onClick: () => console.log('Logout clicked') },
  ];

  return (
    <div>
      <div className="search-section">
        <h3>AZETHETIC GIFT STUDIO</h3>
      </div>
      
      <div>
        <input type="search" placeholder="Search for gifts..."/>
        <DropdownButton label="Select your Location" items={menuItems} />
      </div>
    </div>
  )
}

export default SearchPage