import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="w-60 flex rounded-full shadow-md max-w-md mx-auto mt-8">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 rounded-l-full flex-grow focus:outline-none"
      />
      <button className="flex items-center justify-center w-12 bg-blue-500 text-white rounded-r-full">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
