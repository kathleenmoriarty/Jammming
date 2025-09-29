import React from "react";
import Track from "./Track";

const Tracklist = ({songs, removeTrack, addTrack, playlist}) => {
    return (
        <div className="track-list" >
            {songs.map((song) => (
                <Track 
                    song={song} 
                    key={song.id}
                    addTrack={addTrack}
                    removeTrack={removeTrack}
                    addedToPlaylist={playlist.some(track => track.id === song.id)}
                />)
            )}
        </div>
    )
}

export default Tracklist