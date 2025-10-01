import React, { useState } from "react";
import Tracklist from "./Tracklist";
import "../styles/Playlist.css";

const Playlist = ({playlist, removeTrack, setPlaylistTitle, savePlaylist }) => {
    return (
        <div className="playlist">
            <input type="text" onChange={(e) => setPlaylistTitle(e.target.value)} placeholder="Untitled"/>
                <Tracklist 
                    songs={playlist} 
                    addedToPlaylist={true} 
                    removeTrack={removeTrack}
                    playlist={playlist}
                />
            <button onClick={savePlaylist}>Save to Spotify</button>
        </div>
    )
}

export default Playlist