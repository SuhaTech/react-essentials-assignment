import React from "react";

function SearchBar({
  search,
  setSearch
}) {
  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button
        className="reset-btn"
        onClick={() => setSearch("")}
      >
        Reset
      </button>

    </div>
  );
}

export default SearchBar;