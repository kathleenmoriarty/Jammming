import React, { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./assets/Spotify";

const results = [
  {
    id: 1,
    title: "Dress",
    artist: "taylor",
    album: "Reputation"
  },
  {
    id: 2,
    title: "Wildest Dream",
    artist: "Tay",
    album: "1989"
  }
];

function App() {

  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
    
  const searchResultHandler = (e) => {
      e.preventDefault();
      setSearchResults(results);
    }


  const removeTrack = (song) => {
      const updatedPlaylist = playlist.filter((track) => track.id !== song.id);
      setPlaylist(updatedPlaylist);
      setSearchResults((oldResults) => [...oldResults, song])
  }

  const addTrack = (song) => {
      setPlaylist((oldList) => [...oldList, song]);
      setSearchResults((oldResults) => oldResults.filter((track) => track.id !== song.id));
  }



  {/*const { songs, setSongs } = useState([]);
  const { loading, setLoading } = useState(true);
  const { error, setError } = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('');

        if(!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        const result = await response.json();
  
        setSongs(result);

      } catch(error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchSongs();
  }, []);

  console.log(songs)
console.log(loading)*/}

  return (
      <main>
        <SearchBar search={search} setSearch={setSearch} searchResultHandler={searchResultHandler} />
        <SearchResults searchResults={searchResults} addTrack={addTrack} playlist={playlist} />
        <Playlist  playlist={playlist} removeTrack={removeTrack}  />
      </main>
  )
}

export default App
