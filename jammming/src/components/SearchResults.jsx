import React, { useState } from "react";
import Tracklist from "./Tracklist";

const SearchResults = ({ searchResults, addTrack, playlist }) => {
    return (
        <div className="search-results" >
            <Tracklist 
                songs={searchResults} 
                addedToPlaylist={true} 
                addTrack={addTrack}
                playlist={playlist}
            />
        </div>
    )
};

export default SearchResults;