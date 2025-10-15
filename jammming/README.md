# 🎵 Jammming

Jammming is a React application that allows users to search for songs using the Spotify API and create custom playlists that can be saved directly to their Spotify account. It utilizes Spotify’s **Authorization Code with PKCE** flow for secure login and permission handling.

---

## 🚀 Features

- 🔐 **Spotify Authentication (PKCE)**  
  Secure login using OAuth 2.0 with PKCE.

- 🔍 **Search Songs**  
  Search the Spotify catalog for tracks by name.

- ➕ ➖ **Build Custom Playlists**  
  Add or remove songs from your playlist easily.

- 💾 **Save to Spotify**  
  Save your curated playlist directly to your Spotify account.

---

## 📸 Demo

*Add screenshots or a demo video here if available*

---

## 🛠️ Tech Stack

- **React** — Functional Components and Hooks  
- **Spotify Web API**  
- **JavaScript (ES6+)**  
- **Fetch API**

---

## 📁 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ ├── SearchResults.jsx
│ └── Playlist.jsx
├── assets/
│ └── SpotifyPKCE.js
├── App.js
└── index.js


---

## 🔐 Spotify PKCE Setup

This project uses [PKCE (Proof Key for Code Exchange)](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow) for a secure and client-side-only authentication flow.

In `SpotifyPKCE.js`, you should implement:

- `redirectToSpotifyAuth()`  
  Redirects users to Spotify for login and authorization.
  
- `getAccessToken()`  
  Exchanges the authorization code for an access token.

Make sure your Spotify Developer Dashboard is set up correctly:

1. Go to: [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Create an app.
3. Set the **Redirect URI** to your app’s redirect URL (e.g., `http://localhost:3000`)
4. Save your **Client ID** and use it in your PKCE logic.

---

## 🧪 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/jammming.git
cd jammming

## 2. Install dependencies

```bash
npm install

## 3. Run the app

npm start

## ✅ Usage

1. Click **Login with Spotify** to authenticate.
2. Enter a search term (e.g., artist, song name).
3. Add tracks from search results to your playlist.
4. Enter a **playlist title**.
5. Click **Save Playlist** – your playlist will appear in your Spotify account!

---

## ⚠️ Notes

- Spotify's token expires after a short duration — PKCE flow should handle silent re-authentication if implemented fully.
- You must be logged into a valid Spotify account to create playlists.
- Playlists are saved as **private** by default.

---

## 🧹 Future Improvements

- Add loading spinners and better error handling  
- Show track previews or album images  
- Allow reordering tracks in the playlist  
- Support for public/private playlist toggle  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Spotify Web API Docs](https://developer.spotify.com/documentation/web-api/)
- PKCE implementation ideas inspired by Spotify’s official tutorial

