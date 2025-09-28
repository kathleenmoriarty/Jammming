import React, { useState } from "react";
import Track from "./Track";

const SearchResults = ({ data }) => {

    const [searchResults, setSearchResults] = useState([]);
    
    const searchResultHandler = (e) => {
        e.preventDefault();
        setSearchResults(data);
      }

    return (
        <div className="search-results" >
            <button onClick={searchResultHandler}>Hey</button>
            {searchResults.map((song, index) => (
                <Track title={song.title} artist={song.artist} album={song.album} key={index} />)
            )}
        </div>
    )
};

export default SearchResults;