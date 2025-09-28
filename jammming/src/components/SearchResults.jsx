import React, { useState } from "react";
import Track from "./Track";

const SearchResults = ({ searchResults }) => {
    return (
        <div className="search-results" >
            {searchResults.map((song, index) => (
                <Track title={song.title} artist={song.artist} album={song.album} key={index} />)
            )}
        </div>
    )
};

export default SearchResults;