import React, { useState } from 'react';
import './searchBar.css'; // Import your CSS file for styling

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchQuery);
    // For example, you can trigger an API call with the searchQuery
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-icon" onClick={handleSearch}>
        <i className="fas fa-search"></i> {/* Assuming you're using Font Awesome */}
      </button>
    </div>
  );
};

export default SearchBar;
