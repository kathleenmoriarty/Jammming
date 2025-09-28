import React from "react";

const Track = ({song, setPlaylist}) => {

    return (
        <div className="track">
            <div className="song-info">
                <h3>{song.title}</h3>
                <p>by {song.artist} | {song.album}</p>
            </div>
            <div className="add-song">
                <button onClick={() => setPlaylist((oldList) => [...oldList, song])}>+</button>
            </div>
            
        </div>
    )
}

export default Track