import React from "react";

const Track = ({title, artist, album}) => {
    return (
        <div className="track">
            <div className="song-info">
                <h3>{title}</h3>
                <p>by {artist} | {album}</p>
            </div>
            <div className="add-song">
                <button>+</button>
            </div>
            
        </div>
    )
}

export default Track