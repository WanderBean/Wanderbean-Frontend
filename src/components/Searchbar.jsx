import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="Search-Bar">
      <div className="Search-Container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch id="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
