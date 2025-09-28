import React, { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {

  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);


  const results = [
    {
      title: "Dress",
      artist: "taylor",
      album: "Reputation"
    },
    {
      title: "Wildest Dream",
      artist: "Tay",
      album: "1989"
    }
  ];

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
        <SearchBar search={search} setSearch={setSearch} />
        <SearchResults data={results} />
        <Playlist />
      </main>
  )
}

export default App
