import React, { useState } from "react";
import Track from "./Track";

const SearchResults = ({ searchResults, setPlaylist }) => {
    return (
        <div className="search-results" >
            {searchResults.map((song, index) => (
                <Track song={song} key={index} setPlaylist={setPlaylist} />)
            )}
        </div>
    )
};

export default SearchResults;