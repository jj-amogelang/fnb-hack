import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <input 
        type="text" 
        placeholder="Search for doctor, medications, articles..." 
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;