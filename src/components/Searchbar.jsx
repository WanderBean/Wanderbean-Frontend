import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="justify-start flex bg-white rounded-full shadow-md my-1.5 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 rounded-l-full focus:outline-none"
      />
      <button className="flex justify-start h-full w-12 bg-blue-500 text-white rounded-r-full">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
