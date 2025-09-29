import React, { useState } from "react";
import Tracklist from "./Tracklist";

const Playlist = ({playlist, removeTrack }) => {

    const [playlistTitle, setPlaylistTitle] = useState("");

    return (
        <div className="playlist">
            <input type="text" onChange={(e) => setPlaylistTitle(e.target.value)} placeholder="Untitled"/>
            <h3>{playlistTitle}</h3>
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