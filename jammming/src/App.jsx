import React, { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import { redirectToSpotifyAuth, getAccessToken } from './assets/SpotifyPKCE';

async function searchTracks(query, accessToken) {
  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch tracks:', await response.text());
    return [];
  }

  const data = await response.json();
  return data.tracks.items;
}


function App() {

  const [search, setSearch] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [trackUris, setTrackUris] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const accessToken = await getAccessToken();
      if (accessToken) {
        setToken(accessToken);
        window.history.replaceState({}, document.title, "/"); // Clean up /callback in the URL
      }
    }
    fetchToken();
  }, []);
  
    
  const searchResultHandler = async (e) => {
    e.preventDefault();
    if (!search || !token) return;
  
    try {
      const results = await searchTracks(search, token);
  
      // Filter out tracks already in the playlist
      const filteredResults = results.filter(
        (track) => !playlist.find((p) => p.id === track.id)
      );
  
      setSearchResults(filteredResults);
      setSearch('');

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

  const removeTrack = (song) => {
      const updatedPlaylist = playlist.filter((track) => track.id !== song.id);
      setPlaylist(updatedPlaylist);
      setSearchResults((oldResults) => [...oldResults, song]);
      setTrackUris((oldList) => oldList.filter((uri) => uri !== song.uri));
      
  }

  const addTrack = (song) => {
      setPlaylist((oldList) => [...oldList, song]);
      setSearchResults((oldResults) => oldResults.filter((track) => track.id !== song.id));
      setTrackUris((oldList) => [...oldList, song.uri]);
  }

  async function getUserId(token) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    return data.id; // Spotify user ID
  }

  async function createPlaylist(userId, playlistTitle, token) {
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playlistTitle,
        public: false
      })
    });
  
    const data = await response.json();
    return data.id; // playlist ID
  }

  async function addTracksToPlaylist(playlistId, trackUris, token) {
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uris: trackUris
      })
    });
  }
  

  const savePlaylist = async () => {
    if (!playlistTitle) {
      alert('Please enter a playlist title');
      return;
    }
    if (!trackUris.length) {
      alert('Add at least one track to the playlist');
      return;
    }
    try {
      const userId = await getUserId(token);
      const playlistId = await createPlaylist(userId, playlistTitle, token);
      await addTracksToPlaylist(playlistId, trackUris, token);
      alert(`Playlist "${playlistTitle}" saved successfully!`);
      // Optionally, reset states here
      setPlaylist([]);
      setTrackUris([]);
      setPlaylistTitle('');
    } catch (error) {
      console.error('Error saving playlist:', error);
      alert('Failed to save playlist. Please try again.');
    }
  };
  


  return (
      <main>
        <header>Jammming</header>
        <div className="spotify-login">
          {!token ? (
            <button onClick={redirectToSpotifyAuth}>Login with Spotify</button>
          ) : (
            <div>
              <p>Success!</p>
            </div>
          )}
        </div>
        <SearchBar search={search} setSearch={setSearch} searchResultHandler={searchResultHandler} />
        <div className="list-section">
          <SearchResults searchResults={searchResults} addTrack={addTrack} playlist={playlist} />
          <Playlist  playlist={playlist} savePlaylist={savePlaylist} removeTrack={removeTrack} setPlaylistTitle={setPlaylistTitle} />
        </div>

      </main>
  )
}

export default App