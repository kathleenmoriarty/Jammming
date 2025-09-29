import React, { useState } from "react";
import Tracklist from "./Tracklist";
import "../styles/Playlist.css";

const Playlist = ({playlist, removeTrack }) => {

    const [playlistTitle, setPlaylistTitle] = useState("");

    return (
        <div className="playlist">
            <input type="text" onChange={(e) => setPlaylistTitle(e.target.value)} placeholder="Untitled"/>
            <h2>{playlistTitle}</h2>
                <Tracklist 
                    songs={playlist} 
                    addedToPlaylist={true} 
                    removeTrack={removeTrack}
                    playlist={playlist}
                />
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist