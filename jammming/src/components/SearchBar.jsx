import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ search, setSearch, searchResultHandler }) => {
  return (
    <form className="searchbar" onSubmit={searchResultHandler}>
      <label htmlFor="search">Search for your favorite song, artist, or album!</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter search term"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
