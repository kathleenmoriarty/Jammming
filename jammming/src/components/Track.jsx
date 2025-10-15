import React from "react";
import "../styles/Track.css";

const Track = ({song, addedToPlaylist, removeTrack, addTrack }) => {

    const renderButton = () => {
        if (addedToPlaylist) {
            return <button onClick={() => removeTrack(song)}>-</button>
        } 
        return <button onClick={() => addTrack(song)}>+</button>
    }

    return (
        <div className="track">
            <div className="song-info">
                <h3>{song.name}</h3>
                <p>
                    by {song.artists.map(artist => artist.name).join(', ')} | {" "} {song.album.name}
                </p>
            
            </div>
            <div className="add-remove-song">
                {renderButton()}
            </div>
            
        </div>
    )
}

export default Track