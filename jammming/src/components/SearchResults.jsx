import React from "react";
import Tracklist from "./Tracklist";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults, addTrack, playlist }) => {
    return (
        <div className="search-results" >
        <h2>Search Results:</h2>
            <Tracklist 
                songs={searchResults}  
                addTrack={addTrack}
                playlist={playlist}
            />
        </div>
    )
};

export default SearchResults;