import React from "react";

const SearchBar = ({ search, setSearch }) => {

    const searchHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="searchbar">
            <label htmlFor="search">Search for your favorite song, artist, or album!</label>
            <form onSubmit={searchHandler}>
                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter search term"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar