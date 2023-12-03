import React from 'react';

const SearchBar = ({ search, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={handleSearch}
      className="search-bar m-2"
    />
  );
};

export default SearchBar;