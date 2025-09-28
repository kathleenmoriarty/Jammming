import React from "react";
import Track from "./Track";

const Playlist = ({playlist}) => {
    return (
        <div className="playlist">
            {
                playlist.map((song, index) => (
                    <Track song={song} key={index} />
                ))
            }
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist