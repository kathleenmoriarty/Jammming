import React from "react";
import "../styles/SearchBar.css"


const SearchBar = ({ search, setSearch, searchResultHandler }) => {

    return (
        <div className="searchbar">
            <label htmlFor="search">Search for your favorite song, artist, or album!</label>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter search term"
            />
            <button type="submit" onClick={searchResultHandler}>Search</button>
        </div>
    )
}

export default SearchBar