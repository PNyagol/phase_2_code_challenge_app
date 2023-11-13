import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
